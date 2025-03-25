import NS from "netschoolapi";

const user = new NS({
  origin: "https://sgo.rso23.ru",
  login: "КуликК4",
  password: "6294386",
  school: "МАОУ СОШ № 102", // Название школы (полностью) или её id
});

// Задаём период для получения дневника
const startDate = new Date('2025-04-20');
const endDate = new Date('2025-04-20');

// Получаем данные дневника
const diaryData = await user.diary({
  start: startDate,
  end: endDate,
});

console.log(diaryData);
