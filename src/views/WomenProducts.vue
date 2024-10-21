<template>
    <div>
      <h1>สินค้าผู้หญิง</h1>
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.price }} บาท</p>
          <button @click="addToCart(product)">เพิ่มไปยังรถเข็น</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'VAPORMAX 2021 FK', price: 2500, image: 'image/VAPORMAX 2021 FK.jpg' },
          { id: 2, name: 'WAFFLE ONE', price: 3000, image: 'image/WAFFLE ONE.jpg' },
          // เพิ่มผลิตภัณฑ์ตามต้องการ
        ],
      }
    },
    methods: {
      addToCart(product) {
        console.log(`เพิ่ม ${product.name} ลงในรถเข็น`);
      },
    },
  }
  </script>
  
  <style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
  }
  .product-item {
    margin: 10px;
  }
  </style>
  