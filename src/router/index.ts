import { createRouter, createWebHistory } from 'vue-router'

import Home              from '../views/Home.vue'
import StorageSystems    from "@/views/StorageSystems.vue";
import StorageSystemItem from "@/views/StorageSystemItem.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: Home,
        },
        {
            path: '/systems',
            name: 'Системы хранения',
            component: StorageSystems,
        },
        {
            path: '/systems/shelvingSystemKits',
            name: 'Комплекты стеллажных систем',
            component: StorageSystemItem,
        }
    ],
})
