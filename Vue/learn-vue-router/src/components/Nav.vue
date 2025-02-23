<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <a href="/">Home</a>
    <a href="/about">about</a>
    |
    <RouterLink active-class="active" to="/">Home </RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 10px;
}

.active {
  color: white;
  font-weight: 900px;
  background-color: red;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
}
</style>