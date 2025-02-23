<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import QuizContent from '../components/QuizContent.vue';
import QuizHeader from '../components/QuizHeader.vue';
import quizes from '../data/quizes.json';
import QuizResult from '../components/QuizResult.vue';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => quiz?.id === quizId);
const numberOfCorrectAnswer = ref(0);
const currentQuestionIndex = ref(0);
const showResult = ref(false);

// Use computed for questionPage for better performance
const questionPage = computed(() =>
  `${currentQuestionIndex.value + 1}/${quiz.questions.length}`
);

// Navigation functions for questions
const nextQuestion = () => {
  if (currentQuestionIndex.value < quiz.questions.length - 1) {
    currentQuestionIndex.value++;
  }
};

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
};

const barPercentage = computed(() => {
  return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});

function onSelectOption(option) {
  if (option.isCorrect) {
    numberOfCorrectAnswer.value++;
  }
  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }

  currentQuestionIndex.value++;
}

</script>

<template>
  <div class="container" v-if="quiz">
    <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />
    <QuizContent v-if="!showResult" :question="quiz.questions[currentQuestionIndex] ?? {}"
      @selectOption="onSelectOption" />
    <QuizResult v-else :quizQuestionsLength="quiz.questions.length" :numberOfCorrectAnswer="numberOfCorrectAnswer" />
    <div class="button-container">
      <button @click="prevQuestion" :disabled="currentQuestionIndex.value === 0" class="btn prev-btn">
        ⬅ Previous
      </button>
      <button @click="nextQuestion" :disabled="currentQuestionIndex.value === quiz.questions.length - 1"
        class="btn next-btn">
        Next ➡
      </button>
    </div>
  </div>
  <div v-else class="container">
    <p>Quiz not found.</p>
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

/* Button Styling */
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #6366f1;
  color: white;
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 8px rgba(99, 102, 241, 0.2);
}

.btn:hover:not(:disabled) {
  background: #4f46e5;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
}

.btn:active:not(:disabled) {
  transform: scale(0.97);
}

.btn:disabled {
  background: #d1d5db;
  cursor: not-allowed;
  box-shadow: none;
}

/* Specific styling for Previous button */
.prev-btn {
  background: #4b5563;
}

.prev-btn:hover:not(:disabled) {
  background: #374151;
  box-shadow: 0 4px 10px rgba(75, 85, 99, 0.3);
}
</style>