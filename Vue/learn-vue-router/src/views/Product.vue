<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import products from '../data/products.json';
import { RouterLink } from 'vue-router';

const route = useRoute();
const router = useRouter();
const productId = parseInt(route.params.id);


const product = products.find((product) => product.id === productId);

function showOwner() {
  router.push({ name: 'owner', params: { id: productId } });
}
</script>


<template>
  <div>
    <template v-if="product">
      <h2>{{ product.name }} - {{ product.price }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.year }}</p>
    </template>

    <template v-else>
      <h1>Product not found.</h1>
    </template>
    <button @click="showOwner">Show Owner</button>
    <RouterView />
    <p>
      <RouterLink to="/">Back</RouterLink>
    </p>
  </div>
</template>
