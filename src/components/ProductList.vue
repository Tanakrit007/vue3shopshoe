<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.src" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ formatCurrency(product.price) }}</p>
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
        { id: 1, name: 'CORZA', price: 150, src: '/images/CORZA.jpg' },
        { id: 2, name: 'CORRELATE', price: 800, src: '/images/CORRELATE.svg' },
        { id: 3, name: 'EXPERIENCE-RN-11', price: 2500, src: '/images/EXPERIENCE-RN-11.svg' },
        { id: 4, name: 'VAPORMAX 2021 FK', price: 2500, src: '/images/VAPORMAX 2021 FK.jpg' },
        { id: 5, name: 'WAFFLE ONE', price: 2500, src: '/images/WAFFLE ONE.jpg' },
        { id: 6, name: 'ONDECK FLIP FLOP', price: 2500, src: '/images/ONDECK FLIP FLOP.jpg' },
      ],
    };
  },
  methods: {
    viewProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    formatCurrency(value) {
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
