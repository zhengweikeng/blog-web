<template lang="jade">
.post-list.vertical
  tags-select
  posts-title(v-bind:posts="posts")
  posts-pager
</template>

<script>
import TagsSelect from '../tags/tags.select.vue'
import PostsPager from './posts.pager.vue'
import PostsTitle from './posts.title.vue'

export default {
  ready() {
    const tag = this.$route.params.tag
    this.$http.get(`posts/tag/${tag}`)
    .then(function(res) {
      this.$set('posts', res.data)
      this.$set('total', res.data.total)
    })
  },
  
  components: {
    PostsTitle,
    PostsPager,
    TagsSelect
  },
  
  data() {
    return {
      posts: [],
      total: 0,
      limit: 5
    }
  }
}
</script>

<style>
@import "./posts.less";
</style>