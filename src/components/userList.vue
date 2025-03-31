<script setup>
import useUsers from '../composables/useUsers'
const users = useUsers().usersLocalStorage.value


</script>

<template>
    <div>
        Вывод пользователей
    </div>
    <div v-for="elem in users">
        <RouterLink :to="{
            name: 'userPage',
            params: {
                id: elem.id
            }
        }">{{ elem.id }} : {{ elem.name }}</RouterLink>

    </div>

</template>

<style scoped></style>
