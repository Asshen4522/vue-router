<script setup>

import { RouterView } from 'vue-router';

</script>

<template>
  <div>
    <RouterLink :to="{ name: 'pageOne' }">На страницу 1</RouterLink>
    <RouterLink :to="{ name: 'pageTwo' }">На страницу 2</RouterLink>
    <RouterLink :to="{ name: 'pageThree' }">На страницу 3</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
