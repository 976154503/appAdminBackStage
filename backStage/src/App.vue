<template>
  <div id="app">
      <div class="el-logo-head">
        <p>小应用系统</p>
      </div>
      <el-form ref="form" :model="form" label-width="80px" class="login-form">
        <p class="login-title">XXX小程序应用系统</p>
        <el-input v-model="form.name" placeholder="请输入手机号" class="form-input"></el-input>
        <el-input v-model="form.password" placeholder="请输入密码" type="password" class="form-input"></el-input>
        <el-button type="primary" class="fluid mt15 mb15" @click='submit()'>登&nbsp;&nbsp;陆</el-button>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
        if(!this.form.name){
          this.$message({
            message: '手机号未填写',
            type: 'warning'
          });
          return;
        }
        if(!this.form.password){
          this.$message({
            message: '密码未填写',
            type: 'warning'
          });
          return;
        }
    }
  }
}
</script>

<style>
body {
  background-color: #f6f6f6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-logo-head {
  background-color: #000;
}

.el-logo-head p {
  width: 1180px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}

.login-form {
  width: 280px;
  padding: 15px 30px;
  margin: 150px auto 0;
  background-color: #fff;
}

.login-title {
  font-size: 14px;
  color: #666;
  text-align: left;
}

.form-input {
  margin: 5px auto;
}

.fluid {
  width: 100%;
}

.mt15 {
  margin-top: 15px;
}

.mb15 {
  margin-bottom: 15px;;
}
</style>
