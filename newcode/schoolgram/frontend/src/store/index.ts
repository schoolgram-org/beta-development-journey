import { createStore } from 'vuex';

interface State {
  loginData: {
    origin: string;
    school: string;
    user: string;
    password: string;
  };
  diaryData: {
    lessons: any[];
  };
  isAuthenticated: boolean; // Новое состояние авторизации
}

const initialState: State = {
  loginData: {
    origin: '',
    school: '',
    user: '',
    password: '',
  },
  diaryData: {
    lessons: [],
  },
  isAuthenticated: false, // Инициализация нового состояния
};

const store = createStore({
  state: initialState,
  mutations: {
    updateLoginData(state, loginData) {
      state.loginData = loginData;
    },
    updateDiaryData(state, diaryData) {
      state.diaryData = diaryData;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }, // Mutation для обновления состояния авторизации
  },
  getters: {
    getLoginData(state) {
      return state.loginData;
    },
    getDiaryData(state) {
      return state.diaryData;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    }, // Getter для нового состояния авторизации
  },
});

export default store;