<script setup>
import { reactive } from 'vue';
import useUsers from '../composables/useUsers'

const local = reactive({
    inpName: ""
})

function addUser() {
    if (local.inpName === "") {
        alert('Введите имя')
    } else {
        useUsers().addUser(local.inpName)
    }
}
</script>

<template>
    <div>
        Добавление пользователей
    </div>
    <div>
        <input type="text" v-model="local.inpName">
        <button @click="addUser">Добавить</button>
    </div>
</template>

<style scoped></style>
