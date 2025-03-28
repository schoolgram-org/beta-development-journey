<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="origin">Origin</label>
        <input type="text" id="origin" v-model="loginData.origin" required />
      </div>
      <div>
        <label for="school">School</label>
        <input type="text" id="school" v-model="loginData.school" required />
      </div>
      <div>
        <label for="user">User</label>
        <input type="text" id="user" v-model="loginData.user" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="loginData.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

interface LoginData {
  origin: string;
  school: string;
  user: string;
  password: string;
}

export default defineComponent({
  setup(props, { emit }) {
    const store = useStore();
    const loginData = ref({
      origin: '',
      school: '',
      user: '',
      password: '',
    });

    const handleSubmit = async () => {
      store.commit('updateLoginData', loginData.value);
      emit('login-success');
    };

    return { loginData, handleSubmit };
  },
});
</script>