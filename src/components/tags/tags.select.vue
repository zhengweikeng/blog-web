<template lang="jade">
.tag(v-if="tags.length > 0")
  label tag:&nbsp;&nbsp;
  a(v-for="tag in tags") {{tag}} 
</template>

<script>
export default {
  ready() {
    let url = 'tags'
    if (this.year && this.title) {
      url += `/${this.year}/${this.title}`
    } 
    
    this.$http.get(url)
    .then((res) => {
      this.$set('tags', res.data)
    })
  },
  
  props: ['year', 'title'],
  
  data() {
    return {
      tags: []
    }
  }
}
</script>

<style lang="less">
.tag {
  a {
    cursor: pointer
  }
}
</style>