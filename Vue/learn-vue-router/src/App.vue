<script setup>

import { RouterView } from "vue-router"
import Nav from "./components/Nav.vue"

</script>

<template>
  <div>
    <Nav />
    <main>
      <RouterView />
    </main>
  </div>
</template>


<style></style>