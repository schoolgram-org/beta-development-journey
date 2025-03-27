<template>
  <div class="lessons-list">
    <LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LessonCard from './LessonCard.vue'

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
    LessonCard
  },
  props: {
    lessons: {
      type: Array as PropType<Lesson[]>,
      required: true,
    },
  },
})
</script>
