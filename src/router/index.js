import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MenProducts from '../views/MenProducts.vue';
import WomenProducts from '../views/WomenProducts.vue';
import Login from "../views/Login.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/products/men', component: MenProducts },
  { path: '/products/women', component: WomenProducts },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
