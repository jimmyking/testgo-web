<template>
  <div>abc</div>
    
</template>

<script>
import {getStore} from '../../util/utils'

export default {
  mounted () {
    this.loadPage()
  },
  methods: {
    async loadPage () {
      var uId = getStore('uId')
      if (!uId) {
        this.$router.push('login')
      }
    }
  }
}
</script>




