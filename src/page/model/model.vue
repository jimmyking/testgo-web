<template>
  <div>
    <el-row style="margin-bottom:10px">
      <el-col :span="23">
        <el-breadcrumb separator="/" style="height:32px;line-height:32px;">
          <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'modelList', params: {pId: project.id } }">{{ project.name }}</el-breadcrumb-item>
          <el-breadcrumb-item>模块列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="1">
        <router-link :to="{name: 'addModel', params: { pId: project.id }}">
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
        prop="prefix"
        label="API url前缀"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { queryModelByProject } from '../../service/getData'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      tableData: []
    }
  },
  computed: {
    ...mapState([
      'project'
    ])
  },
  created () {
    var pId = this.$route.params.pId
    queryModelByProject(pId).then(res => {
      this.tableData = res.data.data
    })
  },
  methods: {
    jumpToFeature: function (row) {
      this.SAVE_MODEL({
        id: row.id,
        name: row.name,
        prefix: row.prefix
      })
      this.$router.push({name: 'featureList', params: {pId: 1, mId: row.id}})
    },
    ...mapMutations(
      [
        'SAVE_PROJECT',
        'SAVE_MODEL'
      ]
    )
  }
}
</script>

