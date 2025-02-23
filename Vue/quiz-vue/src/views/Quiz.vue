<script setup lang="ts">
import QuizContent from '../components/QuizContent.vue';
import QuizHeader from '../components/QuizHeader.vue';

</script>

<template>
  <div class="container">
    <QuizHeader></QuizHeader>
    <QuizContent></QuizContent>

  </div>
</template>

<style scoped>
/* Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

body {
  background: #f8f9fa;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}


/* Responsive Design */
@media (max-width: 480px) {
  .question-title {
    font-size: 1.6rem;
  }

  .option-card {
    padding: 0.8rem;
  }

  .option-label {
    width: 35px;
    height: 35px;
    margin-right: 1rem;
  }
}
</style>