import NS from "netschoolapi";

const user = new NS({
  origin: "origin",
  login: "username",
  password: "password",
  school: "school", // Название школы (полностью) или её id
});

const startDate = new Date('date');
const endDate = new Date('date');

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
