<template lang="jade">
.post-list.vertical
  years-select
  tags-select
  posts-title
  posts-pager
</template>

<script>
import YearsSelect from '../tags/years.select.vue'
import TagsSelect from '../tags/tags.select.vue'
import PostsTitle from './posts.title.vue'
import PostsPager from './posts.pager.vue'

export default {
  components: {
    YearsSelect,
    PostsTitle,
    PostsPager,
    TagsSelect
  }
}
</script>  


<style lang="less">
@import "./posts.less";
</style>