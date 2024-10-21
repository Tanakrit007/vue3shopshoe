<template>
    <div class="home">
      <header>
        <img alt="Shoe Store Logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <h1>ร้านขายรองเท้า</h1>
      </header>
  
      <nav class="navbar">
        <button @click="goToPage('home')">หน้าหลัก</button>
        <button @click="goToPage('men')">สินค้าผู้ชาย</button>
        <button @click="goToPage('women')">สินค้าผู้หญิง</button>
        <button @click="goToPage('login')">Login</button>
      </nav>
  
      <main>
        <ProductList />
      </main>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import ProductList from '../components/ProductList.vue'; // เปลี่ยนเส้นทางตรงนี้
  
  const router = useRouter();
  
  function goToPage(page) {
    if (page === 'home') {
      router.push('/');
    } else if (page === 'men') {
      router.push('/men');
    } else if (page === 'women') {
      router.push('/women');
    } else if (page === 'login') {
      router.push('/login');
    }
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  
  header {
    margin-bottom: 1.5rem;
  }
  
  .logo {
    display: block;
    margin: 0 auto;
  }
  
  .navbar {
    margin-bottom: 2rem;
  }
  
  .navbar button {
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .navbar button:hover {
    background-color: #0056b3;
  }
  </style>
  