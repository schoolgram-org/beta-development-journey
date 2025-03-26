Project Path: test-json-data

Source Tree:

```
test-json-data
├── langchain.md
├── data.json
├── README.md
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── logo192.png
├── package.json
└── src
    ├── LessonList.js
    ├── reportWebVitals.js
    ├── App.css
    ├── index.js
    ├── index.css
    ├── data.json
    ├── App.test.js
    ├── LessonCard.js
    ├── setupTests.js
    ├── logo.svg
    ├── App.js
    └── LessonsList.js

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/data.json`:

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

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/public/manifest.json`:

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/package.json`:

```json
{
  "name": "test-json-data",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/LessonList.js`:

```js
import React from 'react';
import LessonCard from './LessonCard';

const LessonsList = ({ lessons }) => {
  return (
    <div className="lessons-list">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
};

export default LessonsList;

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/reportWebVitals.js`:

```js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/App.css`:

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/index.css`:

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/data.json`:

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

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/App.test.js`:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/LessonCard.js`:

```js
import React from 'react';

const LessonCard = ({ lesson }) => {
  return (
    <div className="lesson-card">
      <h2>{lesson.subject}</h2>
      <p>Время начала: {lesson.startDate}</p>
      <p>Время конца: {lesson.endDate}</p>
      <h3>Домашнее задание:</h3>
      <ul>
        {lesson.assignments.map((assignment) => (
          <li key={assignment.id}>{assignment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonCard;

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/setupTests.js`:

```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/logo.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/App.js`:

```js
import React from 'react';
import LessonsList from './LessonsList';
import data from './data.json';

const App = () => {
  return (
    <div>
      <LessonsList lessons={data.days[0].lessons} />
    </div>
  );
};

export default App;

```

`/Users/goosedev72/vscode/new-dnevnik/api-tests/test-json-data/src/LessonsList.js`:

```js
import React from 'react';
import LessonCard from './LessonCard';

const LessonsList = ({ lessons }) => {
  return (
    <div className="lessons-list">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
};

export default LessonsList;

```