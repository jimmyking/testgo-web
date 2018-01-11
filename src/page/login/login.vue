<template>
  <el-container class="login-container">
    <el-header>登录</el-header>
    <el-main>
      <el-form label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password">
          </el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="jumpToSignup">注册</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    
  </el-container> 
</template>

<script>
import {signin} from '../../service/getData'
import constant from '../../config/constant'
import { setStore } from '../../util/appUtils'

export default {
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {
            required: true, message: '用户名不能为空', trigger: 'blur'
          }
        ],
        password: [
          {
            required: true, message: '密码不能为空', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          signin(this.loginForm.name, this.loginForm.password).then(res => {
            if (res.data.success) {
              var userId = res.data.data
              setStore(constant.UID, userId)
              this.$router.push('/home')
            } else {
              this.$message.error(res.data.message)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    jumpToSignup () {
      this.$router.push('/signup')
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

