<template>
    <div>
      <h1>สินค้าผู้ชาย</h1>
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
          { id: 1, name: 'รองเท้าผู้ชายรุ่น A', price: 2500, image: 'path/to/imageA.jpg' },
          { id: 2, name: 'รองเท้าผู้ชายรุ่น B', price: 3000, image: 'path/to/imageB.jpg' },
          // เพิ่มผลิตภัณฑ์ตามต้องการ
        ],
      }
    },
    methods: {
      addToCart(product) {
        // ฟังก์ชันสำหรับเพิ่มสินค้าลงในรถเข็น
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
  