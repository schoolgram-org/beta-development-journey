Project Path: schoolgram

Source Tree:

```
schoolgram
├── frontend
│   ├── tsconfig.node.json
│   ├── index.html
│   ├── tsconfig.app.json
│   ├── bun.lockb
│   ├── langchain.md
│   ├── README.md
│   ├── public
│   │   └── vite.svg
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── src
│       ├── App.vue
│       ├── main.ts
│       ├── components
│       │   ├── Login.vue
│       │   ├── LessonCard.vue
│       │   └── LessonsList.vue
│       ├── vite-env.d.ts
│       ├── style.css
│       ├── assets
│       │   └── vue.svg
│       └── store
│           └── index.ts
├── bun.lockb
├── langchain.md
├── backend
│   ├── main.ts
│   ├── package.json
│   └── lol.html
└── package.json

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/public/vite.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/package.json`:

```json
{
  "name": "vue-jsonparse",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.10"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.4",
    "typescript": "^5.5.3",
    "vite": "^5.4.8",
    "vue-tsc": "^2.1.6"
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/tsconfig.json`:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/App.vue`:

```vue
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
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/main.ts`:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';

createApp(App).use(store).mount('#app')

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/components/Login.vue`:

```vue
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
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/components/LessonCard.vue`:

```vue
<template>
  <div class="lesson-card">
    <h2>{{ lesson.subject }}</h2>
    <p>Время начала: {{ lesson.startDate }}</p>
    <p>Время конца: {{ lesson.endDate }}</p>
    <h3>Домашнее задание:</h3>
    <ul>
      <li v-for="assignment in lesson.assignments" :key="assignment.id">
        {{ assignment.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Lesson {
  id: number;
  subject: string;
  startDate: string;
  endDate: string;
  assignments: {
    id: number;
    text: string;
  }[];
}

export default defineComponent({
  props: {
    lesson: {
      type: Object as PropType<Lesson>,
      required: true,
    },
  },
});
</script>

<style>
.lesson-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/components/LessonsList.vue`:

```vue
<template>
  <div class="lessons-list">
    <LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import LessonCard from './LessonCard.vue';

interface Lesson {
  id: number;
  subject: string;
  startDate: string;
  endDate: string;
  assignments: {
    id: number;
    text: string;
  }[];
}

export default defineComponent({
  components: { LessonCard },
  props: {
    lessons: {
      type: Array as PropType<Lesson[]>,
      required: true,
    },
  },
});
</script>

<style>
.lessons-list {
  display: flex;
  flex-direction: column;
}
</style>

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/style.css`:

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/assets/vue.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path></svg>
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/frontend/src/store/index.ts`:

```ts
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
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/backend/main.ts`:

```ts
import express, { Request, Response, NextFunction } from 'express';
import NS from 'netschoolapi';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
const packageJson = require('./package.json');

const app = express();
const port = 3000;

// Настройка CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Middleware для прямых запросов из браузера
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.accepts('html') && req.method === 'GET' &&!req.path.startsWith('/api') &&!req.path.startsWith('/update-login-data') &&!req.path.startsWith('/diary/')) {
    res.sendFile(path.join(__dirname, 'lol.html'));
  } else {
    next();
  }
});

// Эндпоинт для обновления данных логина
app.post('/update-login-data', (req: Request, res: Response) => {
  const loginData = req.body;
  // Обновление данных в бэкенде (при необходимости)
  res.send('Login data updated successfully');
});

// Эндпоинт для получения дневника по дате
app.get('/diary/:date', async (req: Request, res: Response) => {
  const date = req.params.date;
  const loginData = req.query; // Получаем данные из query параметров

  const user = new NS({
    origin: loginData.origin,
    login: loginData.user,
    password: loginData.password,
    school: loginData.school,
  });

  const startDate = new Date(date);
  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + 1); // Для получения данных за весь день

  try {
    const diary = await user.diary({ start: startDate, end: endDate });
    const diaryJSON = diary.toJSON();
    res.send(diaryJSON);
  } catch (error) {
    console.error('Error fetching diary:', error);
    res.status(500).send({ message: 'Failed to fetch diary' });
  }
});

app.listen(port, () => {
  console.log(`Schoolgram BACKEND v3.0`);
  console.log(` `);
  console.log(` Listening requests`);
  console.log(`  Address: http://localhost:${port}`);
  console.log(`  NetSchoolApi version: ${packageJson.dependencies['netschoolapi']}`);
  console.log(`  Express version: ${packageJson.dependencies['express']}`)
});
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/backend/package.json`:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "bun run --watch main.ts"
  },
  "dependencies": {
    "express": "^4.17.1",
    "netschoolapi": "^1.1.4",
    "fs": "^0.0.1-security"
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/backend/lol.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Внимание</title>
</head>
<body>
  <h1>Вы как-то зашли на Backend! Обычным пользователям он недоступен, а если вы разработчик... Frontend на порту 5173 или 5174 (смотря на логи Vite)</h1>
  <p>Если вы хотели бы получить дневник, то используйте Frontend или зайдите на https://schoolgram-org.github.io/docs, чтобы создать свое крутое приложение на нашем Backend.</p>
</body>
</html>
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/schoolgram/package.json`:

```json
{
  "name": "@schoolgram-org/schoolgram",
  "version": "3.1.0",
  "author": "schoolgram-org",
  "dependencies": {
    "axios": "^1.8.4",
    "bun": "^1.2.0",
    "cors": "^2.8.5",
    "vuex": "^4.1.0"
  },
  "devDependencies": {
    "concurrently": "^9.1.2",
    "typescript": "^5.7.3"
  },
  "description": "NetSchool Wrapper",
  "keywords": [],
  "license": "MIT",
  "private": true,
  "scripts": {
    "dev:backend": "cd backend && bun dev",
    "dev:frontend": "cd frontend && bun dev",
    "dev:all": "concurrently \"bun dev:backend\" \"bun dev:frontend\""
  },
  "workspaces": ["./*"]
}

```