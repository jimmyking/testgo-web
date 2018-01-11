<template>
  <div>abc</div>
    
</template>

<script>
import {getStore} from '../../util/appUtils'
import constant from '../../config/constant'

export default {
  mounted () {
    this.loadPage()
  },
  methods: {
    async loadPage () {
      var uId = getStore(constant.UID)
      if (!uId) {
        this.$router.push('login')
      }
    }
  }
}
</script>




