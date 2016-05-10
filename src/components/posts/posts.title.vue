<template lang="jade">
ul.list-group
  li.list-group-item(v-for="p in posts")
    div(v-bind:class="p.tag ? 'title' : ''")
      a(v-link="{name: 'postsDetail', params: {year: p.year, title: p.title}}") {{p.title}}
      span.time {{p.postTime}}
    tags-select(v-bind:p-tags="p.tag")
</template>

<script>
import TagsSelect from '../tags/tags.select.vue'
import {posts} from '../../scripts/getters/posts'

export default {
  components: {
    TagsSelect
  },
  
  vuex: {
    getters: {
      posts
    }
  } 
}
</script>