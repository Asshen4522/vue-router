<script setup>


</script>

<template>

  <RouterLink :to="{ name: 'userList' }">Выводим пользователей</RouterLink>
  <RouterLink :to="{ name: 'addUser' }">Добавляем пользователей</RouterLink>

  <RouterView />

</template>

<style scoped></style>
