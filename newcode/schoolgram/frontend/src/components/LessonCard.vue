<template>
  <div class="lesson-card">
    <h2>{{ lesson.subject }}</h2>
    <p>Время начала: {{ lesson.startDate }}</p>
    <p>Время конца: {{ lesson.endDate }}</p>
    <h3>Домашнее задание:</h3>
    <ul>
      <li v-for="assignment in lesson.assignments" :key="assignment.id">
        {{ assignment.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
  props: {
    lesson: {
      type: Object as PropType<Lesson>,
      required: true,
    },
  },
});
</script>

<style>
.lesson-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
