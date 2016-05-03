require('../styles/github-framework.min.css')
require('bootstrap/dist/css/bootstrap.min.css')

import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from '../components/home/home.vue'
import {routerMapping} from './config/router.mapping'
import {httpBaseConfig, interceptorsConfig} from './config/http.config' 

Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter()
routerMapping(router)

httpBaseConfig(Vue)
interceptorsConfig(Vue, router)

router.start(App, '#blog')