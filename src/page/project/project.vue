<template>
  <div>
    <el-row style="margin-bottom:10px">
      <el-col :span="23">
        <el-breadcrumb separator="/" style="height:32px;line-height:32px;">
          <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="1">
        <router-link :to="{path: 'addProject'}">
          <el-button size="small" type="primary" icon="el-icon-circle-plus"></el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%" @row-click="jumpToModel">
      <el-table-column
        prop="name"
        label="项目名称"
        align="center">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="创建日期"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { queryProject } from '../../service/getData'
import constant from '../../config/constant'
import { getStore } from '../../util/appUtils'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    var uId = getStore(constant.UID)
    queryProject(uId).then(res => {
      this.tableData = res.data.data
    })
  },
  methods: {
    jumpToModel: function (row) {
      this.SAVE_PROJECT({
        id: row.id,
        name: row.name
      })
      this.$router.push({name: 'modelList', params: { pId: row.id }})
    },
    ...mapMutations([
      'SAVE_PROJECT'
    ])
  }
}
</script>

