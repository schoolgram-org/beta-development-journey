import NS from "netschoolapi";

const user = new NS({
  origin: "https://sgo.rso23.ru/",
  login: "КуликК4",
  password: "6294386",
  school: "МАОУ СОШ № 102", // Название школы (полностью) или её id
});

const startDate = new Date('2025-03-16');
const endDate = new Date('2025-03-21');

(async function () {
  // Получаем дневник
  const diary = await user.diary({
    start: startDate,
    end: endDate,
  });

  const diaryJSON = diary.toJSON();
  const diaryString = JSON.stringify(diaryJSON);
  console.log(diaryString);
})();
