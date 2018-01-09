<template>
  <div>
    <el-row class="tool-section">
      <el-col>
        <router-link :to="{path: 'addProject'}">
          <el-button type="primary" icon="el-icon-circle-plus"></el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180" align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180" align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址" align="center">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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


