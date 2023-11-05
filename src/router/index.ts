import { createRouter, createWebHistory } from 'vue-router'

import Home           from '../views/Home.vue'
import StorageSystems from "@/views/StorageSystems.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/systems',
            name: 'systems',
            component: StorageSystems,
        },
    ],
})
