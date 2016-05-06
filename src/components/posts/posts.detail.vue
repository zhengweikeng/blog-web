<template lang="jade">
div
  {{{blogHtml}}}
</template>

<script>
export default {
  ready() {
    const params = this.$route.params
    this.$http.get(`posts/${params.year}/${params.title}`)
    .then((res) => {
      this.$set('blogHtml', res.data)
    })
  },
  
  data() {
    return {
      blogHtml: ''
    }
  }
}
</script>

<style scoped>
</style>