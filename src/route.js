
import { createRouter, createWebHistory } from 'vue-router'

import userList from './components/userList.vue'
import addUser from './components/addUser.vue'
import userPage from './components/userPage.vue'

import delUser from './components/userPages/delUser.vue'
import changeName from './components/userPages/changeName.vue'

const routes = [
    {path:'/',component:userList,name:'userList'},
    {path:'/addUser',component:addUser,name:'addUser'},
    {
        path:'/userPage/:id',
        component:userPage,
        name:'userPage',
        children:[
            {
                path:'delUser',
                component: delUser,
                name: 'delUser',
            },
            {
                path:'changeName',
                component: changeName,
                name: 'changeName',
            }
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})