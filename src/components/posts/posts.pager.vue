<template lang="jade">
nav
  ul.pager
    li(v-bind:class="currPage === 0 ? 'disabled' : ''")
      a(v-on:click="pagerPrev" v-bind:class="currPage === 0 ? '' : 'btn-link'") Previous
    li(v-bind:class="totalPage - 1 === 0 || currPage === totalPage - 1 ? 'disabled' : ''")
      a(v-on:click="pagerNext"
        v-bind:class="totalPage - 1 <= 0 || currPage === totalPage - 1 ? '' : 'btn-link'"
        ) &nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;
</template>

<script>
export default {
  props: ['total', 'limit'],
  
  data() {
    return {
      currPage: 0
    }
  },
  
  methods: {
    pagerNext() {
      if (this.totalPage - 1 > 0 && this.currPage < this.totalPage - 1)
        this.$dispatch('page-change', ++this.currPage) 
    },
    pagerPrev() {
      if (this.currPage > 0) this.$dispatch('page-change', --this.currPage) 
    }
  },
  
  computed: {
    totalPage() {
      if (this.total >= 0 && this.limit > 0) {
        return Math.floor(this.total / this.limit) + 1
      }
      return 0
    }
  },
  
  events: {
    'resetCurrPage': function() {
      this.currPage = 0
    }
  }
}
</script>

<style lang="less">
.btn-link {
  cursor: pointer
}

</style>