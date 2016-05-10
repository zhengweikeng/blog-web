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
import {fetchPosts, setPage} from '../../scripts/actions/posts.action'
import {total, currPage} from '../../scripts/getters/posts'

export default {
  vuex: {
    actions: {
      fetchPosts,
      setPage
    },
    getters: {
      total,
      currPage
    }
  },
  
  data() {
    return {
      limit: 5,
    }
  },
  
  methods: {
    pagerNext() {
      if (this.totalPage - 1 > 0 && this.currPage < this.totalPage - 1) {
        const page = this.currPage + 1
        this.fetchPosts({page, limit: this.limit})
        this.setPage(page) 
      }
    },
    pagerPrev() {
      if (this.currPage > 0) {
        const page = this.currPage - 1
        this.fetchPosts({page, limit: this.limit})
        this.setPage(page)
      } 
    }
  },
  
  computed: {
    totalPage() {
      if (this.total >= 0 && this.limit > 0) {
        const rest = this.total % this.limit
        let totalPage = Math.floor(this.total / this.limit)
        return rest > 0 ? totalPage + 1 : totalPage 
      }
      return 0
    }
  }
}
</script>

<style lang="less">
.btn-link {
  cursor: pointer
}

</style>