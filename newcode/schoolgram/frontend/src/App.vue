<template>
  <div>
    <Login v-if="!isLoggedIn" @login-success="handleLoginSuccess" />
    <div v-else>
      <input type="date" v-model="selectedDate" @change="fetchDiary">
      <LessonsList v-if="diaryData" :lessons="diaryData.lessons" />
      <div v-if="loginData">
        <h2>diary</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Login from './components/Login.vue';
import LessonsList from './components/LessonsList.vue';
import axios from 'axios';
import { useStore } from 'vuex';
import store from './store/index'; 

export default {
  components: { Login, LessonsList },
  setup() {
    const store = useStore();
    let loginData = store.getters.getLoginData;
    const isLoggedIn = ref(false);
    const selectedDate = ref('');
    const diaryData = ref(null);

    const handleLoginSuccess = () => {
      isLoggedIn.value = true;
      loginData.value = store.getters.getLoginData;
    };

    const waitForLoginData = async () => {
      while (!loginData ||!loginData.origin ||!loginData.user ||!loginData.password ||!loginData.school) {
        await new Promise(resolve => setTimeout(resolve, 100));
        loginData = store.getters.getLoginData;
      }
    };

    const fetchDiary = async () => {
      if (!loginData.value || Object.keys(loginData.value).length === 0) {
        console.error('loginData is empty');
        return;
      }
      // console.log(store.getters.getLoginData.origin);
      // console.log(store.getters.getLoginData.user);
      // console.log(store.getters.getLoginData.password);
      // console.log(store.getters.getLoginData.school);
      try {
        const response = await axios.get(`http://localhost:3000/diary/${selectedDate.value}`, {
          params: {
            origin: store.getters.getLoginData.origin,
            user: store.getters.getLoginData.user,
            password: store.getters.getLoginData.password,
            school: store.getters.getLoginData.school,
          },
        });
        store.commit('updateDiaryData', response.data); // Обновление состояния с помощью мутации
      } catch (error) {
        console.error('Error fetching diary:', error);
      }
    };

    return { 
      isLoggedIn, 
      selectedDate, 
      diaryData, 
      handleLoginSuccess, 
      fetchDiary, 
      loginData 
    };
  },
};
</script>