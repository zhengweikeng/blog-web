<template lang="jade">
ul.list-group
  li.list-group-item(v-for="p in currPosts")
    div(v-bind:class="p.tag ? 'title' : ''")
      a(v-link="{name: 'postsDetail', params: {year: year, title: p.title}}") {{p.title}}
      span.time {{p.postTime}}
    .tag(v-if="p.tag")
      label tag:&nbsp;&nbsp;
      span {{p.tag.join(',')}}
</template>

<script>
export default {
  props: ['posts', 'year'],
  
  data() {
    return {
      
    }
  },
  
  computed: {
    currPosts() {
      if (this.posts[this.year]) {
        return this.posts[this.year].catalogues
      }
      return []
    }
  } 
}
</script>