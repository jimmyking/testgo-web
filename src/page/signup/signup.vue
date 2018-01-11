<template>
  <div>
    <el-container class="login-container">
    <el-header>注册</el-header>
    <el-main>
      <el-form label-width="80px" :model="signupForm" :rules="signupRule" ref="signupForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="signupForm.name" placeholder="请输入您的邮箱">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="signupForm.password">
          </el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="onSubmit">注册</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container> 
  </div>
</template>

<script>
import { validEmail, setStore } from '../../util/appUtils'
import { signup } from '../../service/getData'
import constant from '../../config/constant'

export default {
  data () {
    var validName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.signupForm.name !== '') {
          if (!validEmail(this.signupForm.name)) {
            callback(new Error('请输入正确的邮箱地址'))
          }
        }
      }
      callback()
    }
    var validPw = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      callback()
    }
    return {
      signupForm: {
        name: '',
        password: ''
      },
      signupRule: {
        name: [
          {
            validator: validName, trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validPw, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['signupForm'].validate((valid) => {
        if (valid) {
          console.log('success submit!!')
          signup(this.signupForm.name, this.signupForm.password).then(res => {
            console.log('res=', res)
            var userId = res.data.data
            setStore(constant.UID, userId)
            this.$router.push('/home')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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