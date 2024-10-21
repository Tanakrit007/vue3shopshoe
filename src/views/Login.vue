<template>
  <div class="container">
    <h1>Login Page</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form @submit.prevent="onLogin">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onLogin() {
      // เพิ่มโค้ดจัดการ login ที่นี่
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // คุณสามารถเพิ่มการเชื่อมต่อกับ backend สำหรับตรวจสอบการ login ที่นี่
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
