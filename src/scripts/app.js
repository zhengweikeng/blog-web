require('../styles/github-framework.min.css')
require('bootstrap/dist/css/bootstrap.min.css')

import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from '../components/home/home.vue'

Vue.use(vueRouter)
Vue.use(vueResource)
new Vue({
  el: '#blog',
  components: {
    app: App
  }
})