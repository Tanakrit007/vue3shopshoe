<template>
  <div class="home">
    

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
