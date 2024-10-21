<template>
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.price | currency }}</p>
      <p>{{ product.description }}</p>
      <button @click="addToCart">เพิ่มลงในตะกร้า</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: null,
      };
    },
    mounted() {
      const productId = this.$route.params.id;
      // เรียกข้อมูลสินค้าตาม ID (ตัวอย่างข้อมูล)
      this.product = {
        id: productId,
        name: 'รองเท้ากีฬา',
        price: 1500,
        image: '/images/sport-shoe.png',
        description: 'รองเท้ากีฬาคุณภาพสูงสำหรับการออกกำลังกาย',
      };
    },
    methods: {
      addToCart() {
        alert('เพิ่มสินค้าลงในตะกร้าเรียบร้อย');
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
  