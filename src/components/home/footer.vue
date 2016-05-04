<template lang="jade">
  footer.site-footer
    section.copyright
      a(v-link="'/'")
        | Wayne Zheng
      © 2016
</template>

<style lang="less">
.site-footer {
  padding: 1rem 15px;
  font-size: 1rem;
  color: #BBC7CC;
  line-height: 1.75em;
  border-top: 1px solid #e7e7e7;
}
.copyright {
  text-align: center;
  a {
    margin-right: 5px;
  }
}
</style>