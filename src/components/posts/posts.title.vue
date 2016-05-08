<template lang="jade">
ul.list-group
  li.list-group-item(v-for="p in currPosts")
    div(v-bind:class="p.tag ? 'title' : ''")
      a(v-link="{name: 'postsDetail', params: {year: p.year, title: p.title}}") {{p.title}}
      span.time {{p.postTime}}
    tags-select(v-bind:p-tags="p.tag")
</template>

<script>
import TagsSelect from '../tags/tags.select.vue'

export default {
  components: {
    TagsSelect
  },
  props: ['posts'],
  
  computed: {
    currPosts() {
      if (this.posts) {
        return this.posts.catalogues
      }
      return []
    }
  } 
}
</script>