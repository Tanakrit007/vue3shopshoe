<template>
    <div class="login-container">
      <h2>เข้าสู่ระบบ</h2>
      <button class="google">เข้าสู่ระบบด้วย Google</button>
      <button class="facebook">เข้าสู่ระบบด้วย Facebook</button>
      <p>หรือ</p>
      <input type="email" placeholder="อีเมล" />
      <input type="password" placeholder="รหัสผ่าน" />
      <p>
        <a href="#" class="show-password">ลืมรหัสผ่าน?</a>
      </p>
      <button class="submit">เข้าสู่ระบบ</button>
      <p>ยังไม่เป็นสมาชิก? <a href="#">สมัครสมาชิก</a></p>
    </div>
  </template>
  
  <script setup>
  // เพิ่มโค้ด JavaScript ที่ต้องการที่นี่ ถ้ามี
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
  }
  
  button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  
  .google {
    background-color: #db4437; /* สีแดงสำหรับ Google */
  }
  
  .facebook {
    background-color: #3b5998; /* สีน้ำเงินสำหรับ Facebook */
  }
  
  .submit {
    background-color: #333; /* สีดำสำหรับปุ่มเข้าสู่ระบบ */
  }
  
  .show-password {
    color: #007bff; /* สีสำหรับลืมรหัสผ่าน */
  }
  </style>
  