<script setup>
import { defineProps } from 'vue';

const props = defineProps(['questionPage', 'barPercentage']);
</script>

<template>
  <header>
    <div class="progress-info">
      <span class="progress-text">Question {{ props.questionPage }}</span>
      <span class="progress-percent">{{ props.barPercentage }}</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: props.barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
/* Header Progress */
.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #6c757d;
  font-weight: 500;
}

.progress-bar {
  height: 12px;
  background: #e9ecef;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 20px;
  transition: width 0.5s ease;
}
</style>
