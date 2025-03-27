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
import { defineComponent, PropType } from 'vue'

interface Assignment {
  id: number;
  text: string;
}

interface Lesson {
  id: number;
  subject: string;
  startDate: string;
  endDate: string;
  assignments: Assignment[];
}

export default defineComponent({
  props: {
    lesson: {
      type: Object as PropType<Lesson>,
      required: true,
    },
  },
})
</script>

<style scoped>
.lesson-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.lesson-card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.lesson-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

.lesson-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lesson-card li {
  font-size: 16px;
  margin-bottom: 10px;
}

.lesson-card li::before {
  content: "\2022";
  font-size: 20px;
  margin-right: 10px;
}
</style>
