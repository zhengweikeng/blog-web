<template lang='jade'>
.site
  header
  .site-content
</template>

<script>
import header from './header.vue'

export default {
  components: {
    header
  }
}
</script>

<style lang='less'>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
  .site-content {
    flex: 1;
  }
}
</style>