<script setup>
import { reactive } from 'vue';
import useUsers from '../../composables/useUsers';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const local = reactive({
    newNameInp: ""
})

function changeName() {
    useUsers().changeUser(Number(route.params.id), local.newNameInp)
    router.push({ name: 'userPage', params: { id: Number(route.params.id) } }) // костыль - возвращаемся на внешний компонент
}

</script>
<template>

    <input type="text" v-model="local.newNameInp">
    <button @click="changeName">Меняем</button>
</template>
<style scoped></style>