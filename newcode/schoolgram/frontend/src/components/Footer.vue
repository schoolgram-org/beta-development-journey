<template>
  <footer>
    <nav>
      <ul>
        <li><button>Дневник</button></li>
        <li><button>Оценки</button></li>
        <li><button>Пользователь</button></li>
        <li><button>Настройки</button></li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
/* Стили для footer */
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
  padding: 1rem;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
button {
  background-color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>