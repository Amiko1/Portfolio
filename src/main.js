import { createApp } from 'vue'
import App from './App.vue';
import router from './router.js';
import header from './layouts/header.vue'

const app = createApp(App)

app.component("main-header", header);

app.use(router);
app.mount('#app');

