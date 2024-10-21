<script setup>
import ProductList from './components/ProductList.vue';
</script>

<template>
  <header>
    <img alt="Shoe Store Logo" class="logo" src="./images/logo.svg" width="125" height="125" />
    <h1>ร้านขายรองเท้า</h1>
  </header>

  <main>
    <ProductList />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-top: 1rem;
}

main {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0;
  }
}
</style>
