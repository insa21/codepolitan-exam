<script setup>
import { useRoute } from 'vue-router';
import products from '../data/products.json';
import { RouterLink } from 'vue-router';


const route = useRoute();
const product = products.find(product => product.id === parseInt(route.params.id));

</script>


<template>
  <div>
    <h2>{{ product.name }} - {{ product.price }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.year }}</p>
    <p>
      <RouterLink to="/">Back</RouterLink>
    </p>
  </div>
</template>