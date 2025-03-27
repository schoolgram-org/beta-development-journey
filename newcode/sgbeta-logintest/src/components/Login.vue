<template>
  <div class="login-form">
    <h2>Telegram Web Mini App Login</h2>
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
    <div v-if="loginError" class="error">{{ loginError }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    })
    const loginError = ref<string | null>(null)

    const handleSubmit = async () => {
      try {
        // Здесь должна быть логика авторизации через Telegram API
        // Для демонстрации просто выводим данные в консоль
        console.log('Login Data:', loginData.value)
        // В реальном сценарии вызывайте Telegram API для авторизации
        // и обрабатывайте ответ (успех или ошибку)
      } catch (error) {
        loginError.value = 'Authentication failed. Please check your credentials.'
        console.error('Login Error:', error)
      }
    }

    return { loginData, loginError, handleSubmit }
  }
})
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

button[type="submit"] {
  width: 100%;
  height: 40px;
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
