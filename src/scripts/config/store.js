import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationType from './mutation.type'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

const state = {
  year: 0,
  posts: {},
  currPage: 0
}

const mutations = {
  [mutationType.SELECTION_YEAR] (state, year) {
    state.year = year
  },
  [mutationType.FETCH_POSTS] (state, posts) {
    state.posts = posts
  },
  [mutationType.SETTING_PAGE] (state, page) {
    state.currPage = page
  }
}
export default new Vuex.Store({
  state,
  mutations,
  strict: debug
})