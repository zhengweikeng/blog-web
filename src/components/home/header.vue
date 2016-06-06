<template lang="jade">
.navbar.navbar-default
  .container
    .navbar-header
      button.navbar-toggle.collapsed(type='button', data-toggle='collapse', 
      data-target='#navbar-collapse', aria-expanded='false')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(v-link="'/'") Seed
    #navbar-collapse.collapse.navbar-collapse
      ul.nav.navbar-nav
        li(v-link-active)
          a(v-link="{path: '/', activeClass: 'active'}") Blogs
      ul.nav.navbar-nav.navbar-right.logo-area
        li
          a.logoLink(href="https://github.com/zhengweikeng" target="_blank")  
            img.logo(src="./images/github.png")
</template>

<style lang="less">
.logo-area {
  li {
    a {
      height: 50px;
      padding-top: 10px!important;
    }
  }
  .logo {
    width: 30px;
    height: 30px;
    
    // padding-top: 10px;
  }
}
</style>