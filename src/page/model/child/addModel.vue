<template>
  <div>
    <el-row style="margin-bottom:10px">
      <el-col :span="23">
        <el-breadcrumb separator="/" style="height:32px;line-height:32px;">
          <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'modelList', params: {pId: project.id } }">{{ project.name }}</el-breadcrumb-item>
          <el-breadcrumb-item>新增模块</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="1">
        <router-link :to="{name: 'addModel', params: { pId: project.id }}">
          <el-button size="small" type="primary" icon="el-icon-circle-plus"></el-button>
        </router-link>
      </el-col>
    </el-row>
    <el-form label-width="100px" :model="modelForm" ref="modelForm" :rules="rules">
      <el-form-item label="模块名称" prop="name">
        <el-input v-model="modelForm.name">
        </el-input>
      </el-form-item>
      <el-form-item label="模块url前缀">
        <el-input v-model="modelForm.prefix">
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
import { findProject, addModel } from '../../../service/getData'
import constant from '../../../config/constant'
import { getStore } from '../../../util/appUtils'

export default {
  data () {
    return {
      project: {},
      modelForm: {
        name: '',
        prefix: ''
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
  beforeRouteEnter (to, from, next) {
    var pId = to.params.pId
    findProject(pId).then(res => {
      next(vm => vm.setData(res.data.data))
    })
  },
  methods: {
    setData: function (project) {
      this.project = project
    },
    onSubmit: function () {
      this.$refs['modelForm'].validate((valid) => {
        if (valid) {
          this.modelForm.userId = getStore(constant.UID)
          this.modelForm.projectId = this.project.id
          addModel(this.modelForm).then(res => {
            if (res.data.success) {
              this.$router.push({name: 'modelList', params: { pId: this.project.id }})
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

