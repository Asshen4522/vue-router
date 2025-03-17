import {createRouter, createWebHistory } from 'vue-router'

import page1 from "./components/page1.vue"
import page2 from "./components/page2.vue"
import page3 from "./components/page3.vue"

const routes = [
    {path:'/', component: page1, name:'pageOne'},
    {path:'/second', component: page2, name:'pageTwo'},
    {path:'/third', component: page3, name:'pageThree'}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})