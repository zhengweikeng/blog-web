<template lang="jade">
.post-list.vertical
  years-select
  tags-select
  posts-title(v-bind:posts="allPosts[currYear]")
  posts-pager(v-bind:total="total" v-bind:limit="limit" v-bind:curr-page="currPage")  
</template>

<script>
import YearsSelect from '../tags/years.select.vue'
import TagsSelect from '../tags/tags.select.vue'
import PostsTitle from './posts.title.vue'
import PostsPager from './posts.pager.vue'

import {year} from '../../scripts/getters/tags'
import {posts, total} from '../../scripts/getters/posts'

export default {
  components: {
    YearsSelect,
    PostsTitle,
    PostsPager,
    TagsSelect
  },
  
  vuex: {
    getters: {
      currYear: year,
      allPosts: posts,
      total
    }
  },
  
  data() {
    return {
      // allPosts: {},
      // currYear: 0,
      limit: 5,
      // total: 0
    }
  },
  
  events: {
    // 'year-change': function(year) {
    //   this.currYear = year
    //   this.$broadcast('resetCurrPage')
    //   this.$http.get(`posts/${year}`, {page: 0, limit: this.limit})
    //   .then(function (res) {
    //     if (res.data) {
    //       this.$set(`allPosts[${year}]`, res.data)
    //       this.$set('total', res.data.total)
    //     }
    //   })
    // },
    'page-change': function(page) {
      this.$http.get(`posts/${this.currYear}`, {page, limit: this.limit})
      .then(function (res) {
        if (res.data) {
          this.$set(`allPosts[${this.currYear}]`, res.data)
          this.$set('total', res.data.total)
        }
      })
    }
  }
}
</script>  


<style lang="less">
@import "./posts.less";
</style>