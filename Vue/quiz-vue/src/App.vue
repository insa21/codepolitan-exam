<script setup>
import srcQuiz from "./data/quizes.json"
import { ref, watch } from "vue";

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
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="image" srcset="">
        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }}Questions</p>
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


#quiz-container {
  display: flex;
  flex-wrap: 20px;
  margin-top: 20px;

}


.card {
  width: 200px;
  margin-right: 20px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
}

img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
}

.card-body {
  padding: 0 15px;
}


.card-body h2 {
  font-weight: bold;

}
</style>