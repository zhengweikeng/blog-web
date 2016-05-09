import Vue from 'vue'
import Vuex from 'vuex'
import mutationType from './mutation.type'

Vue.use(Vuex)

const state = {
  year: 0,
  posts: [],
  total: 0
}

const mutation = {
  [mutationType.SELECTION_YEAR] (state, year) {
    state.year = year
  },
  [mutationType.FETCH_POSTS] (state, {page, limit}) {
    Vue.http.get(`posts/${state.year}`, {page, limit})
    .then(function(res) {
      if (res.data) {
        state.posts[state.year] = res.data
        state.total = res.data.total
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutation
})