<template>
  <div>
    <el-header>新增项目</el-header>
    <el-form label-width="80px" :model="projectForm">
      <el-form-item label="项目名称">
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
export default {
  data () {
    return {
      projectForm: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.debug(this.projectForm.name)
      this.$router.push('project')
    }
  }
}
</script>

