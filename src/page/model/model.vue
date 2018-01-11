<template>
  <div>
    <el-row style="margin-bottom:10px">
      <el-col :span="23">
        <el-breadcrumb separator="/" style="height:32px;line-height:32px;">
          <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
          <el-breadcrumb-item>{{ projectName }}</el-breadcrumb-item>
          <el-breadcrumb-item>模块列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="1">
        <router-link :to="{name: 'addModel', params: { pId: 1 }}">
          <el-button size="small" type="primary" icon="el-icon-circle-plus"></el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%" @row-click="jumpToFeature">
      <el-table-column
        prop="name"
        label="模块名称"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="API url前缀"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { findProject } from '../../service/getData'

export default {
  data () {
    return {
      tableData: [],
      projectName: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    var pId = to.params.pId
    findProject(pId).then(res => {
      next(vm => vm.setData(res.data.data))
    })
  },
  methods: {
    jumpToFeature: function (row) {
      console.debug(row)
      this.$router.push({name: 'featureList', params: {pId: 1, mId: row.id}})
    },
    setData: function (data) {
      this.projectName = data.name
    }
  }
}
</script>

<style>
.tool-section{
  float: right;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>