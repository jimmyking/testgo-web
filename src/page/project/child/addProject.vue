<template>
  <div>
    <el-header>新增项目</el-header>
    <el-form label-width="80px" :model="projectForm" ref="projectForm" :rules="rules">
      <el-form-item label="项目名称" prop="name">
        <el-input v-model="projectForm.name">
        </el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {addProject} from '../../../service/getData'
import constant from '../../../config/constant'
import { getStore } from '../../../util/appUtils'

export default {
  data () {
    return {
      projectForm: {
        name: ''
      },
      rules: {
        name: [
          {
            required: true, message: '名称不能为空', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit: function () {
      this.$refs['projectForm'].validate((valid) => {
        if (valid) {
          addProject(getStore(constant.UID), this.projectForm.name).then(res => {
            if (res.data.success) {
              this.$router.push('/project')
            }
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

