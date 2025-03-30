<template>
  <div>
    <Login v-if="!isAuthenticated" @login-success="handleLoginSuccess" />
    <div v-else>
      <Diary />
      <Footer />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Login from './components/Login.vue';
import Diary from './components/Diary.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Login, Diary, Footer },
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters.getIsAuthenticated);

    const handleLoginSuccess = () => {
      store.commit('setAuthenticated', true);
      // Обновить состояние авторизации в localStorage или cookies, если нужно
    };

    return { isAuthenticated, handleLoginSuccess };
  },
};
</script>