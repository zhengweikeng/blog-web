<template lang="jade">
.post-list.vertical
  tags-select(query="true")
  posts-title
  posts-pager
</template>

<script>
import TagsSelect from '../tags/tags.select.vue'
import PostsPager from './posts.pager.vue'
import PostsTitle from './posts.title.vue'

import {fetchPostsByTag} from '../../scripts/actions/posts.action'

export default {
  route: {
    data() {
      const tag = this.$route.params.tag
      this.fetchPostsByTag({tag, page: 0, limit: 5})  
    }
  },
  
  vuex: {
    actions: {
      fetchPostsByTag
    }
  },
  
  components: {
    PostsTitle,
    PostsPager,
    TagsSelect
  }
}
</script>

<style>
@import "./posts.less";
</style>