<template>
  <div>
    <h1>Дневник</h1>
    <input type="date" v-model="selectedDate" @change="fetchDiary">
    <LessonsList v-if="diaryData" :lessons="diaryData.lessons" />
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import LessonsList from './LessonsList.vue';
import { useStore } from 'vuex';

export default {
  components: { LessonsList },
  setup() {
    const store = useStore();
    const selectedDate = ref('');
    const diaryData = ref(null);

    const fetchDiary = async () => {
      try {
        const loginData = store.getters.getLoginData;
        const response = await axios.get(`http://localhost:3000/diary/${selectedDate.value}`, {
          params: {
            origin: loginData.origin,
            user: loginData.user,
            password: loginData.password,
            school: loginData.school,
          },
        });
        diaryData.value = response.data;
      } catch (error) {
        console.error('Error fetching diary:', error);
      }
    };

    return { selectedDate, diaryData, fetchDiary };
  },
};
</script>