<template lang="jade">
div
  .title
    h3 {{title}}
    tags-select(v-bind:year="year" v-bind:title="title") 
        
  Spinner(v-if="loading")
  {{{blogHtml}}}
</template>

<script>
import Spinner from '../spinner/spinner.vue'
import TagsSelect from '../tags/tags.select.vue'

export default {
  ready() {
    const params = this.$route.params
    
    this.$http.get(`posts/${params.year}/${params.title}`)
    .then((res) => {
      this.$set('blogHtml', res.data)
      this.loading = false
    })
  },
  components: {
    Spinner,
    TagsSelect 
  },
  
  data() {
    return {
      blogHtml: '',
      loading: true,
      title: this.$route.params.title || '',
      year: this.$route.params.year || '',
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 10px;
  h3 {
    margin-top: 0;
  }
}
</style>