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