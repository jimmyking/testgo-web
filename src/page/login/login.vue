<template>
  <el-container class="login-container">
    <el-header>登录</el-header>
    <el-main>
      <el-form label-width="80px" :model="loginForm">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="loginForm.password">
          </el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    
  </el-container> 
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.debug(this.loginForm.name)
    }
  }
}
</script>


<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.login-container{
  width: 600px;
  margin: auto;
}
</style>

