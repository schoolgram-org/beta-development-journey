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
  },
  getters: {
    getLoginData(state) {
      return state.loginData;
    },
    getDiaryData(state) {
      return state.diaryData;
    },
  },
});

export default store;