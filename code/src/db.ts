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