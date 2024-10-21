import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // นำเข้า router

const app = createApp(App);
app.use(router); // ใช้ router
app.mount('#app');
