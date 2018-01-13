<template>
  <div>
    <el-row style="margin-bottom:10px">
      <el-col :span="23">
        <el-breadcrumb separator="/" style="height:32px;line-height:32px;">
          <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
          <el-breadcrumb-item :to="{name: 'modelList', params: {pId: project.id }}">{{ project.name }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ model.name }}</el-breadcrumb-item>
          <el-breadcrumb-item>API列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="1">
        <router-link :to="{name: 'addFeature', params: { pId: 1, mid: 1 }}">
          <el-button size="small" type="primary" icon="el-icon-circle-plus"></el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="name"
        label="API名称"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="Method"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="url"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      tableData: []
    }
  },
  computed: {
    ...mapState([
      'project',
      'model'
    ])
  }
}
</script>
