<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['quizQuestionsLength', 'numberOfCorrectAnswer']);
</script>

<template>
  <section class="results">
    <p>Score:</p>
    <h1>{{ props.numberOfCorrectAnswer }}/{{ props.quizQuestionsLength }}</h1>
    <RouterLink to="/" class="btn">Go Back</RouterLink>
  </section>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}

/* Button Styling */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: #6366f1;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.2);
}

.btn:hover {
  background: #4f46e5;
  box-shadow: 0 6px 12px rgba(99, 102, 241, 0.3);
}

.btn:active {
  transform: scale(0.95);
}
</style>
