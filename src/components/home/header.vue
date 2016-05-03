<template lang="jade">
.navbar.navbar-default
  .container-fluid
    .navbar-header
      button.navbar-toggle.collapsed(type='button', data-toggle='collapse', 
      data-target='#navbar-collapse', aria-expanded='false')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href='#') Seed
    #navbar-collapse.collapse.navbar-collapse
      ul.nav.navbar-nav
        li
          a(href='#') Blogs
</template>