<template lang="jade">
.site
  blog-header
  .site-content
    .container
      router-view
  blog-footer
</template>

<script>
import BlogHeader from './header.vue'
import BlogFooter from './footer.vue'
import store from '../../scripts/config/store'

export default {
  components: {
    blogHeader: BlogHeader,
    blogFooter: BlogFooter
  },
  store
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
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    @media(max-width: 750px) {
      .container {
        width: 100%;
      }
    }
  }
}
</style>