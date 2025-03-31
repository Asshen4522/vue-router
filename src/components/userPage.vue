<script setup>
import { useRoute, useRouter } from 'vue-router';
import useUsers from '../composables/useUsers'
import { computed } from 'vue';

const route = useRoute()
const localUser = computed(() => useUsers().usersLocalStorage.value.find((user) => Number(route.params.id) === user.id)) // делаем местного пользователя обновляемым
</script>
<template>
    <div>
        <div>{{ localUser.id }}</div>
        <div>{{ localUser.name }}</div>
        <div>
            <RouterLink :to="{
                name: 'delUser'
            }">Удалить</RouterLink>
            <RouterLink :to="{
                name: 'changeName'
            }">Изменить</RouterLink>
        </div>

        <RouterView />
    </div>

</template>
<style scoped></style>