<script setup>
import srcQuiz from "./data/quizes.json"
import { ref } from "vue";

const quizes = ref(srcQuiz);
console.log(quizes)


</script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz vue</h1>
      <input type="text" id="search-input">
    </header>
    <section id="quiz-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img
          :src="quiz.img"
          :alt="quiz.title">
        <div class="body-card">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.question.length }}Questions</p>
        </div>
      </div>

    </section>
  </main>
</template>



<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color: #c9c9c9a9;
  padding: 10px;
  border-radius: 5px;
}
</style>