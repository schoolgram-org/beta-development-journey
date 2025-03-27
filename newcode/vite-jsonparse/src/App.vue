<template>
  <div>
    <LessonsList :lessons="data.days[0].lessons" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LessonsList from './components/LessonsList.vue';
import data from './data.json';

export default defineComponent({
  components: { LessonsList },
  data() {
    return {
      data,
    };
  },
});
</script>
