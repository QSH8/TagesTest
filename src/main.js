import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store  from './store/index.js';


// Импортируйте файлы CSS Bootstrap и BootstrapVue (порядок важен)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
