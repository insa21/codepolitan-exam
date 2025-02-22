<script setup>
const { props } = defineProps(["quiz"]);
console.log(props);

</script>


<template>
  <div class="card">
    <img :src="quiz.img" alt="quiz.title" :quizes="quizes">
    <div class="card-body">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
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
