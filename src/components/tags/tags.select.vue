<template lang="jade">
.tag(v-if="tags.length > 0")
  label tag:&nbsp;&nbsp;
  a(v-for="tag in tags"
    v-link="{name: 'tag', params: {tag: tag}}") {{tag}} 
</template>

<script>
import {year} from '../../scripts/getters/tags'
export default {
  ready() {
    if (this.query === "true") {
      let url = 'tags'
      if (this.year && this.title) {
        url += `/${this.year}/${this.title}`
      } 
      
      this.$http.get(url)
      .then((res) => {
        this.$set('tags', res.data)
      })
    }
  },
  vuex: {
    getters: {
      year
    }
  },
  
  props: ['title', 'query', 'pTags'],
  
  data() {
    return {
      tags: this.pTags || []
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