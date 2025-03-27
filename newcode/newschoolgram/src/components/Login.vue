<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="origin">Origin</label>
        <input type="text" id="origin" v-model="loginData.origin" required />
      </div>
      <div class="form-group">
        <label for="school">School</label>
        <input type="text" id="school" v-model="loginData.school" required />
      </div>
      <div class="form-group">
        <label for="user">User</label>
        <input type="text" id="user" v-model="loginData.user" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="loginData.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import store from '../store';
import NS from 'netschoolapi';

interface LoginData {
  origin: string;
  school: string;
  user: string;
  password: string;
}

export default defineComponent({
  setup() {
    const loginData = ref<LoginData>({
      origin: '',
      school: '',
      user: '',
      password: '',
    });

    const handleSubmit = async () => {
      try {
        // TODO: implement login logic
        store.user = new NS({
          origin: loginData.value.origin,
          login: loginData.value.user,
          password: loginData.value.password,
          school: loginData.value.school,
        });
      } catch (error) {
        console.error(error);
      }
    };

    return { loginData, handleSubmit };
  },
});
</script>