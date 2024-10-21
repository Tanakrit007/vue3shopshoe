<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.src" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price | currency }}</p>
        <button @click="viewProduct(product.id)">ดูรายละเอียด</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [
          { id: 1, name: 'รองเท้ากีฬา', price: 150, src: '/images/CORZA.svg' },
          { id: 2, name: 'รองเท้าแตะ', price: 800, src: '/images/CORRELATE.svg' },
          { id: 3, name: 'รองเท้าหนัง', price: 2500, src: '/images/EXPERIENCE-RN-11.svg' },
        ],
      };
    },
    methods: {
      viewProduct(id) {
        this.$router.push(`/product/${id}`);
      },
    },
    filters: {
      currency(value) {
        return new Intl.NumberFormat('th-TH', {
          style: 'currency',
          currency: 'THB',
        }).format(value);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .product-item {
    border: 1px solid #ddd;
    padding: 16px;
    width: 200px;
    text-align: center;
  }
  </style>
  