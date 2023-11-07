import { createRouter, createWebHistory } from 'vue-router'

import TheHome         from '../views/TheHome.vue'
import StorageSystems  from "../views/StorageSystems.vue";
import TheBody         from "../components/storageSystems/shelvingSystemKits/TheBody.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: TheHome,
        },
        {
            path: '/systems',
            name: 'Системы хранения',
            component: StorageSystems,
        },
        {
            path: '/systems/shelvingSystemKits',
            name: 'Комплекты стеллажных систем',
            component: TheBody,
        }
    ],
})
