<template>
  <div>
    <Login @update-lessons="updateLessons" />
    <LessonsList :lessons="lessons" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import store from '../store';
import Login from './components/Login.vue';

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
    LessonsList,
  },
  setup() {
    const lessons = ref<Lesson[]>([]);
    const startDate = ref<string>('');
    const endDate = ref<string>('');

    const updateLessons = async (date: string) => {
      try {
        const response = await fetch(`http://localhost:3000/diary`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ date }),
        });
        const data = await response.json();
        lessons.value = data.days[0].lessons;
      } catch (error) {
        console.error(error);
      }
    };

    return {
      lessons,
      updateLessons,
    };
  },
});
</script>
