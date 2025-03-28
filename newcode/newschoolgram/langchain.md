Project Path: newschoolgram

Source Tree:

```
newschoolgram
├── tsconfig.node.json
├── index.html
├── tsconfig.app.json
├── bun.lockb
├── langchain.md
├── README.md
├── public
│   └── vite.svg
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src
    ├── App.vue
    ├── main.ts
    ├── data.json
    ├── components
    │   ├── Login.vue
    │   ├── LessonCard.vue
    │   └── LessonsList.vue
    ├── vite-env.d.ts
    ├── style.css
    ├── assets
    │   └── vue.svg
    └── store.ts

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/tsconfig.node.json`:

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

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/index.html`:

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

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/tsconfig.app.json`:

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

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/public/vite.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/package.json`:

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
    "netschoolapi": "^1.12.1",
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

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/tsconfig.json`:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/App.vue`:

```vue
<template>
  <div>
    <Login @update-lessons="updateLessons" />
    <LessonsList :lessons="lessons" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from './components/Login.vue'
import LessonsList from './components/LessonsList.vue'

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
  components: {
    Login,
    LessonsList
  },
  setup() {
    const lessons = ref<Lesson[]>([])

    const updateLessons = async () => {
      try {
        // Получить JSON из дневника
        console.log("Hoo")
        (async function () {
          if (store.user) {
            // Получаем дневник
            const diary = await store.user.diary({
              start: startDate,
              end: endDate,
            });

            const diaryJSON = diary.toJSON();
            const data = JSON.stringify(diaryJSON);
          } else {
            console.log('Пользователь не авторизован');
          }
        })();
        // Обновить данные в приложении
        lessons.value = data.days[0].lessons
      } catch (error) {
        console.error(error)
      }
    }

    return {
      lessons,
      updateLessons
    }
  }
})
</script>

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/main.ts`:

```ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/data.json`:

```json
{
  "days": [
    {
      "date": "2025-03-20T00:00:00",
      "lessons": [
        {
          "id": 367113129,
          "subject": "Математика",
          "endDate": "2025-03-20T14:25:00",
          "startDate": "2025-03-20T13:45:00",
          "assignments": [
            {
              "id": 502392042,
              "dot": false,
              "text": "карточка",
              "typeId": 3,
              "lessonId": 367113129,
              "attachments": []
            },
            {
              "id": 502392119,
              "dot": false,
              "text": "Перпендикулярные прямые",
              "typeId": 10,
              "lessonId": 367113129,
              "attachments": []
            }
          ]
        },
        {
          "id": 367115557,
          "subject": "Русский язык",
          "endDate": "2025-03-20T15:10:00",
          "startDate": "2025-03-20T14:30:00",
          "assignments": [
            {
              "id": 502489518,
              "dot": false,
              "text": "Параграф 84",
              "typeId": 3,
              "lessonId": 367115557,
              "attachments": []
            },
            {
              "id": 498735911,
              "dot": false,
              "text": "Морфологический анализ местоимений",
              "typeId": 10,
              "lessonId": 367115557,
              "attachments": []
            }
          ]
        },
        {
          "id": 367115981,
          "subject": "Русский язык",
          "endDate": "2025-03-20T16:05:00",
          "startDate": "2025-03-20T15:25:00",
          "assignments": [
            {
              "id": 498735970,
              "dot": false,
              "text": "Правила правописания местоимений: правописание местоимений с не и ни; слитное, раздельное и дефисное написание местоимений",
              "typeId": 10,
              "lessonId": 367115981,
              "attachments": []
            },
            {
              "id": 502489702,
              "dot": false,
              "text": "Не и ни с местоимениями.",
              "typeId": 3,
              "lessonId": 367115981,
              "attachments": []
            }
          ]
        },
        {
          "id": 367107114,
          "subject": "История",
          "endDate": "2025-03-20T16:50:00",
          "startDate": "2025-03-20T16:10:00",
          "assignments": [
            {
              "id": 501294323,
              "dot": false,
              "text": "Ордена крестоносцев и борьба с их экспансией на западных границах Руси",
              "typeId": 10,
              "lessonId": 367107114,
              "attachments": []
            },
            {
              "id": 501294854,
              "dot": false,
              "text": "п22 к.к стр 12-13",
              "typeId": 3,
              "lessonId": 367107114,
              "attachments": []
            }
          ]
        },
        {
          "id": 367115629,
          "subject": "Физическая культура",
          "endDate": "2025-03-20T17:35:00",
          "startDate": "2025-03-20T16:55:00",
          "assignments": [
            {
              "id": 499725153,
              "dot": false,
              "text": "ОРУ.Отжимания.Подтягивание на перекладине.",
              "typeId": 3,
              "lessonId": 367115629,
              "attachments": []
            },
            {
              "id": 499725186,
              "dot": false,
              "text": "Физкультурно-оздоровительная деятельность. Упражнения для профилактики нарушения зрения",
              "typeId": 10,
              "lessonId": 367115629,
              "attachments": []
            }
          ]
        },
        {
          "id": 373413280,
          "subject": "Труд (технология)",
          "endDate": "2025-03-20T18:20:00",
          "startDate": "2025-03-20T17:40:00",
          "assignments": [
            {
              "id": 500866490,
              "dot": false,
              "text": "доклад по теме",
              "typeId": 3,
              "lessonId": 373413280,
              "attachments": []
            },
            {
              "id": 500866513,
              "dot": false,
              "text": "Практическая работа «Конструирование робота. Программирование поворотов робота»",
              "typeId": 10,
              "lessonId": 373413280,
              "attachments": []
            }
          ]
        },
        {
          "id": 373414374,
          "subject": "Труд (технология)",
          "endDate": "2025-03-20T19:00:00",
          "startDate": "2025-03-20T18:25:00",
          "assignments": [
            {
              "id": 500866595,
              "dot": false,
              "text": "доклад по теме",
              "typeId": 3,
              "lessonId": 373414374,
              "attachments": []
            },
            {
              "id": 500866604,
              "dot": false,
              "text": "Роботы на колёсном ходу",
              "typeId": 10,
              "lessonId": 373414374,
              "attachments": []
            }
          ]
        }
      ]
    }
  ],
  "endDate": "2025-03-20T00:00:00",
  "startDate": "2025-03-20T00:00:00"
}

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/components/Login.vue`:

```vue
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
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/components/LessonCard.vue`:

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
import { defineComponent, PropType } from 'vue'

interface Assignment {
  id: number;
  text: string;
}

interface Lesson {
  id: number;
  subject: string;
  startDate: string;
  endDate: string;
  assignments: Assignment[];
}

export default defineComponent({
  props: {
    lesson: {
      type: Object as PropType<Lesson>,
      required: true,
    },
  },
})
</script>

<style scoped>
.lesson-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.lesson-card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.lesson-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

.lesson-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lesson-card li {
  font-size: 16px;
  margin-bottom: 10px;
}

.lesson-card li::before {
  content: "\2022";
  font-size: 20px;
  margin-right: 10px;
}
</style>

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/components/LessonsList.vue`:

```vue
<template>
  <div class="lessons-list">
    <LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LessonCard from './LessonCard.vue'

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
  components: {
    LessonCard
  },
  props: {
    lessons: {
      type: Array as PropType<Lesson[]>,
      required: true,
    },
  },
})
</script>

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/style.css`:

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

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/assets/vue.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path></svg>
```

`/Users/goosedev72/vscode/new-dnevnik/newcode/newschoolgram/src/store.ts`:

```ts
import NS from 'netschoolapi';

interface Store {
  user: NS | null;
}

const store: Store = {
  user: null,
};

export default store;
```