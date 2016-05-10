import mutationType from '../config/mutation.type'
import Vue from 'vue'

const fetchPosts = ({dispatch, state}, {page, limit}) => {
  Vue.http.get(`posts/${state.year}`, {page, limit})
  .then(function(res) {
    if (res.data) {
      dispatch(mutationType.FETCH_POSTS, res.data)
    }
  })
}

const setPage = ({dispatch}, page) => dispatch(mutationType.SETTING_PAGE, page)

export {fetchPosts, setPage}