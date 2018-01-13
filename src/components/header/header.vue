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
import {mapMutations} from 'vuex'
import {getStore} from '../../util/appUtils'
import constant from '../../config/constant'
import {findUser, findProject, findModel} from '../../service/getData'
import is from 'is_js'

export default {

  computed: {
    activeMenu: function () {
      return this.$route.path
    }
  },
  methods: {
    ...mapMutations([
      'SAVE_USERINFO',
      'SAVE_PROJECT',
      'SAVE_MODEL'
    ])
  },
  created () {
    if (is.null(getStore(constant.UID)) || is.undefined(getStore(constant.UID))) {
      this.$router.push('/login')
      return
    }
    if (is.null(this.$store.state.userInfo) && is.not.null(getStore(constant.UID))) {
      findUser().then(res => {
        this.SAVE_USERINFO(res.data.data)
      })
    }
    let params = this.$route.params
    if (is.not.undefined(params.pId) && params.pId !== this.$store.state.project.id) {
      findProject(params.pId).then(res => {
        this.SAVE_PROJECT(res.data.data)
      })
    }
    if (is.not.undefined(params.mId) && params.mId !== this.$store.state.model.id) {
      findModel(params.mId).then(res => {
        this.SAVE_MODEL(res.data.data)
      })
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
