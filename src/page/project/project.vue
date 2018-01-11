<template>
  <div>
    <el-row class="tool-section">
      <el-col>
        <router-link :to="{path: 'addProject'}">
          <el-button type="primary" icon="el-icon-circle-plus"></el-button>
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
        prop="date"
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

export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    var uId = getStore(constant.UID)
    queryProject(uId).then(res => {
      this.tableData = res.data.data
    })
  },
  methods: {
    jumpToModel: function (row) {
      console.debug(row)
      this.$router.push({name: 'modelList', params: { pId: row.id }})
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


