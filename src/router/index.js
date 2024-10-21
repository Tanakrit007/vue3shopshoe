import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // หน้าแรก
import MenProducts from '../views/MenProducts.vue'; // สินค้าผู้ชาย
import WomenProducts from '../views/WomenProducts.vue'; // สินค้าผู้หญิง
import Login from '../components/Login.vue'; // ใช้ Login.vue

const routes = [
  { path: '/', component: Home },
  { path: '/products/men', component: MenProducts },
  { path: '/products/women', component: WomenProducts },
  { path: '/login', component: Login }, // เพิ่มเส้นทางสำหรับหน้า Login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
