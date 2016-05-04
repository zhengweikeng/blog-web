<template lang="jade">
.post-list.vertical
  ul.list-group
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span nodess
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span node
    li.list-group-item
      .title 
        a(href="") Node.js关于Stream的理解
        span.time 2016-01-01
      .tag
        label tag:&nbsp;&nbsp;
        span nodess
  nav
    ul.pager
      li
        a(v-link="") Previous
      li
        a(v-link="") &nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;
</template>

<script>
export default {
  ready: function () {
    console.log(this.$resource)
    this.$http.get('/posts')
    .then((datas) => {
      console.log(datas)
    }, (err) => console.log(err))
  }
}
</script>  


<style lang="less">
.vertical {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  .list-group {
    flex: 1;
    
    .title {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      
      .time {
        font-size: 12px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>