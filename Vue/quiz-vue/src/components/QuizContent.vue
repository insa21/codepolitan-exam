<script setup>
import { defineProps } from 'vue';

const props = defineProps(['question']);

const emit = defineEmits(['selectOption']);

function emitSelectedOption(option) {
  emit('selectOption', option);
}

</script>
<template>
  <div v-if="props.question">
    <section class="question-container">
      <h1 class="question-title">{{ props.question.text }}</h1>
    </section>
    <section class="options-container">
      <div class="option-card" v-for="option in props.question.answers" :key="option.id"
        @click="() => emitSelectedOption(option)">
        <div class="option-label">{{ option.label }}</div>
        <div class="option-content">{{ option.text }}</div>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Loading question...</p>
  </div>
</template>

<style scoped>
/* Question Section */
.question-container {
  margin: 2.5rem 0;
}

.question-title {
  font-size: 2rem;
  color: #1f2937;
  text-align: center;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.5px;
}

/* Options Styling */
.options-container {
  display: grid;
  gap: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.option-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.option-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #6366f1;
}

.option-label {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.option-content {
  font-size: 1.1rem;
  color: #374151;
  font-weight: 500;
  line-height: 1.4;
}
</style>
