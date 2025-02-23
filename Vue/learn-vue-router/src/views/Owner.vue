<script setup>
import { useRoute } from 'vue-router';
import products from '../data/products.json';

const route = useRoute();

// Konversi route.params.id menjadi angka agar cocok dengan product.id
const product = products.find((p) => p.id === Number(route.params.id));
</script>

<template>
  <div>
    <h1>Owner</h1>
    <template v-if="product">
      <p>{{ product.name }}</p>
      <p>{{ product.description }}</p>
    </template>
    <template v-else>
      <h1>Product not found.</h1>
    </template>
  </div>
</template>
