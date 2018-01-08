<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            TestGo
          </el-col>
          <el-col :span="20">
            <el-menu mode="horizontal" class="main-menu">
              <el-menu-item index="1">我的项目</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.main-menu{
  background-color: #B3C0D1;
}
.main-menu .el-menu-item{
  color: black;
}
.main-menu .el-menu-item:focus,
.main-menu .el-menu-item:hover{
  color: black;
  background-color: #B3C0D1;
}
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
</style>
