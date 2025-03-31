<script setup>
import { useRoute, useRouter } from 'vue-router'
import useUsers from '../../composables/useUsers'

const route = useRoute()
const router = useRouter()
const localUser = useUsers().findUser(Number(route.params.id))

function deleteUser() {
    useUsers().deleteUser(localUser.id)
    router.push({ name: 'userList' })
}
</script>
<template>
    <button @click="deleteUser">Удалить</button>
</template>
<style scoped></style>