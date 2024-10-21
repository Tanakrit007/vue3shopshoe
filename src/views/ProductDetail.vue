<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.price | currency }}</p>
    <p>{{ product.description }}</p>
    <button @click="addToCart">เพิ่มลงในตะกร้า</button>
  </div>
  <div v-else>
    <p>ไม่พบข้อมูลสินค้า</p>
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
  async mounted() {
    const productId = this.$route.params.id;
    try {
      // Replace with your API call
      // const response = await fetch(`api/products/${productId}`);
      // this.product = await response.json();
      this.product = {
        id: productId,
        name: 'รองเท้ากีฬา',
        price: 1500,
        image: '/images/sport-shoe.png',
        description: 'รองเท้ากีฬาคุณภาพสูงสำหรับการออกกำลังกาย',
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      this.product = null; // Handle error by setting product to null
    }
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
