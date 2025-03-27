const NS = require("netschoolapi").default;
const user = new NS({
  origin: "https://sgo.rso23.ru/", // Origin вашего сайта
  login: "КуликК4", // Ваш логин
  password: "6294386", // Ваш пароль
  school: "МАОУ СОШ № 102", // Название вашей школы (как на сайте)
});

(async function () {
  const info = await user.info();
  console.log(info);
})();
