<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <router-link :to="{path: '/home'}">TestGo</router-link>
          </el-col>
          <el-col :span="20">
            <el-menu :default-active="activeMenu" mode="horizontal" class="main-menu" router>
              <el-menu-item index="/project">我的项目</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-container>
            <el-main class="main-warp">
              <router-view/>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  computed: {
    activeMenu: function () {
      return this.$route.path
    }
  }
}
</script>


<style>
.main-warp{
  padding: inherit;
}
.main-menu{
  background-color: white;
}
.main-menu .el-menu-item{
  color: black;
}
.main-menu .el-menu-item:focus,
.main-menu .el-menu-item:hover{
  color: black;
  background-color: white;
}
.el-header, .el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main {
    background-color: white;
    color: #333;
    text-align: center;
}
</style>
