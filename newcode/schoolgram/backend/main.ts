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