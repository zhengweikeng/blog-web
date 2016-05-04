<template lang="jade">
.site
  blog-header
  .site-content.container
    router-view
  blog-footer
</template>

<script>
import BlogHeader from './header.vue'
import BlogFooter from './footer.vue'

export default {
  components: {
    blogHeader: BlogHeader,
    blogFooter: BlogFooter
  }
}
</script>

<style lang="less">
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
  .site-content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>