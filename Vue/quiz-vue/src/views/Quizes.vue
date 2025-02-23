<script setup>
import srcQuiz from "../data/quizes.json"
import { ref, watch } from "vue";
import QuizCard from "../components/QuizCard.vue";

const quizes = ref(srcQuiz);
const search = ref("");
console.log(quizes)

watch(search, () => {
  quizes.value = srcQuiz.filter(quiz => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
})


</script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz vue</h1>
      <input v-model.trim="search" type="text" id="search-input">
    </header>
    <section id="quiz-container">
      <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </section>
  </main>
</template>



<style scoped>
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


#quiz-container {
  display: flex;
  flex-wrap: 20px;
  margin-top: 20px;
}
</style>