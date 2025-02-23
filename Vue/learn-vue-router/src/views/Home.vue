<script setup>
import products from '../data/products.json';
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="products">
      <RouterLink v-for="product in products" :key="product.id" :to="`/products/${product.id}`">
        <h2>{{ product.name }}</h2>
        <!-- <p>{{ product.price }}</p> -->
      </RouterLink>
    </div>
  </div>
</template>


<style scoped>
.products {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 1rm;
}
</style>