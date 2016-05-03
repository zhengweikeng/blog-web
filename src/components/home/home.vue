<template lang="jade">
.site
  blog-header
  .site-content
    .container-fluid
      | hello world
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
  }
}
</style>