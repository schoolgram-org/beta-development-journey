<template>
  <div>
    <Login @update-lessons="updateLessons" />
    <LessonsList :lessons="lessons" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from './components/Login.vue'
import LessonsList from './components/LessonsList.vue'

interface Lesson {
  id: number;
  subject: string;
  startDate: string;
  endDate: string;
  assignments: {
    id: number;
    text: string;
  }[];
}

export default defineComponent({
  components: {
    Login,
    LessonsList
  },
  setup() {
    const lessons = ref<Lesson[]>([])

    const updateLessons = async () => {
      try {
        // Получить JSON из дневника
        console.log("Hoo")
        (async function () {
          if (store.user) {
            // Получаем дневник
            const diary = await store.user.diary({
              start: startDate,
              end: endDate,
            });

            const diaryJSON = diary.toJSON();
            const data = JSON.stringify(diaryJSON);
          } else {
            console.log('Пользователь не авторизован');
          }
        })();
        // Обновить данные в приложении
        lessons.value = data.days[0].lessons
      } catch (error) {
        console.error(error)
      }
    }

    return {
      lessons,
      updateLessons
    }
  }
})
</script>
