Project Path: code

Source Tree:

```
code
├── bun.lockb
├── langchain.md
├── README.md
├── package.json
├── tsconfig.json
├── index.ts
└── src
    ├── index.tsx
    ├── App.tsx
    ├── styles
    ├── components
    │   └── App.tsx
    └── db.ts

```

`/Users/goosedev72/vscode/new-dnevnik/code/package.json`:

```json
{
  "name": "schoolgram-next",
  "version": "1.0.0",
  "scripts": {
    "start": "bun run --watch src/index.tsx"
  },
  "dependencies": {
    "jsdom": "^26.0.0",
    "netschoolapi": "^1.12.1",
    "pg": "^8.7.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "bun": "^1.2.6",
    "typescript": "^5.8.2"
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/code/tsconfig.json`:

```json
{
  "compilerOptions": {
    // Enable latest features
    "lib": ["ESNext", "DOM"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}

```

`/Users/goosedev72/vscode/new-dnevnik/code/index.ts`:

```ts
console.log("Hello via Bun!");
```

`/Users/goosedev72/vscode/new-dnevnik/code/src/index.tsx`:

```tsx
import { serve } from 'bun';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

serve({
  port: 3000,
  fetch: (req) => {
    const html = renderToString(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});
```

`/Users/goosedev72/vscode/new-dnevnik/code/src/App.tsx`:

```tsx
import React, { useState, useEffect } from 'react';
import { saveData, getData, getDataById, updateData, deleteData } from './db';

const App = () => {
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [school, setSchool] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    const result = await saveData({ origin, school, login, password });
    console.log(result);
  };

  const handleUpdate = async (id: number) => {
    const result = await updateData(id, { origin, school, login, password });
    console.log(result);
  };

  const handleDelete = async (id: number) => {
    const result = await deleteData(id);
    console.log(result);
  };

  return (
    <div>
      <h1>Данные</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Origin: {item.origin}</p>
            <p>School: {item.school}</p>
            <p>Login: {item.login}</p>
            <p>Password: {item.password}</p>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Добавить данные</h2>
      <form>
        <label>
          Origin:
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </label>
        <br />
        <label>
          School:
          <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
        </label>
        <br />
        <label>
          Login:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
        </label>
        <br />
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default App;
```

`/Users/goosedev72/vscode/new-dnevnik/code/src/components/App.tsx`:

```tsx
import React, { useState, useEffect } from 'react';
import { saveData, getData, getDataById, updateData, deleteData } from './db';

const App = () => {
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [school, setSchool] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    const result = await saveData({ origin, school, login, password });
    console.log(result);
  };

  const handleUpdate = async (id: number) => {
    const result = await updateData(id, { origin, school, login, password });
    console.log(result);
  };

  const handleDelete = async (id: number) => {
    const result = await deleteData(id);
    console.log(result);
  };

  return (
    <div>
      <h1>Данные</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Origin: {item.origin}</p>
            <p>School: {item.school}</p>
            <p>Login: {item.login}</p>
            <p>Password: {item.password}</p>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Добавить данные</h2>
      <form>
        <label>
          Origin:
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </label>
        <br />
        <label>
          School:
          <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
        </label>
        <br />
        <label>
          Login:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
        </label>
        <br />
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default App;
```

`/Users/goosedev72/vscode/new-dnevnik/code/src/db.ts`:

```ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export const saveData = async (data: any) => {
  try {
    const result = await pool.query('INSERT INTO your_table (origin, school, login, password) VALUES ($1, $2, $3, $4)', [
      data.origin,
      data.school,
      data.login,
      data.password,
    ]);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getData = async () => {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    return result.rows;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getDataById = async (id: number) => {
  try {
    const result = await pool.query('SELECT * FROM your_table WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateData = async (id: number, data: any) => {
  try {
    const result = await pool.query('UPDATE your_table SET origin = $1, school = $2, login = $3, password = $4 WHERE id = $5', [
      data.origin,
      data.school,
      data.login,
      data.password,
      id,
    ]);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteData = async (id: number) => {
  try {
    const result = await pool.query('DELETE FROM your_table WHERE id = $1', [id]);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
```