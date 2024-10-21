<script setup>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router'; // เพิ่มการนำเข้า RouterLink
import ProductList from './components/ProductList.vue';
</script>

<template>
  <header>
    <img alt="Shoe Store Logo" class="logo" src="./images/logo.svg" width="125" height="125" />
    <h1>SKO SHOP</h1>
    <nav>
      <RouterLink to="/">หน้าหลัก</RouterLink>
      <RouterLink to="/products/men">สินค้าผู้ชาย</RouterLink>
      <RouterLink to="/products/women">สินค้าผู้หญิง</RouterLink>
      <RouterLink to="/login">ล็อกอิน</RouterLink>
    </nav>
  </header>

  <main>
    <router-view /> <!-- เพิ่ม router-view สำหรับแสดงคอมโพเนนต์ตามเส้นทาง -->
  </main>
  <footer class="footer">
  <div class="footer-content">
    <p>ติดต่อเรา: <a href="mailto:your-email@example.com">ss5453702@gmail.com</a></p>
    <p>ที่อยู่: 123 ถนนความลับ, เมืองนครปฐม, ประเทศไทย,ไปรษณีย์:73000</p>
  </div>
</footer>

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

nav {
  margin-top: 1rem; /* เพิ่มระยะห่างระหว่างหัวเรื่องกับ navigation */
}

nav a {
  margin: 0 1rem; /* เพิ่มระยะห่างระหว่างลิงก์ */
  text-decoration: none; /* ลบขีดเส้นใต้ */
  color: #000; /* กำหนดสีลิงก์ */
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
.footer {
  background-color: var(--color-background); /* ใช้สีพื้นหลังเดียวกับแอป */
  padding: 20px;
  text-align: center;
  margin-top: 20px; /* ระยะห่างระหว่างแถบข้อมูลติดต่อกับเนื้อหา */
  border-top: 1px solid #ddd; /* เส้นขอบด้านบน */
}

.footer-content p {
  margin: 5px 0; /* ระยะห่างระหว่างข้อความ */
  color: var(--color-text); /* ใช้สีข้อความที่กำหนด */
}

.footer-content a {
  color: #28a745; /* สีลิงค์ */
  text-decoration: underline; /* ขีดเส้นใต้ */
}

.footer-content a:hover {
  color: var(--color-button); /* เปลี่ยนสีเมื่อโฮเวอร์ */
}

</style>
