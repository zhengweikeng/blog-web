<template lang="jade">
.btn-group(role="group" style="margin-bottom: 10px;")
  button(v-for="year in years" 
    v-bind:class="['btn', 'btn-default', currIndex === $index ? 'active' : '']"
    v-on:click="changeYears($index, year)") {{year}}
</template>

<script>
export default {
  ready() {
    this.$http.get('posts/years')
    .then(function(res) {
      this.$set('years', res.data)
      if (Array.isArray(res.data) && res.data.length > 0) {
        this.$dispatch('year-change', res.data[0])
      }
    })
  },
  
  data() {
    return {
      years: [],
      currIndex: 0
    }
  },
  
  methods: {
    changeYears(index, year) {
      this.currIndex = index
      this.$dispatch('year-change', year)
    }
  }
}
</script>