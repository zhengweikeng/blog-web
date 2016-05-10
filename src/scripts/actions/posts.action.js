import {FETCH_POSTS, SETTING_PAGE} from '../config/mutation.type'
import Vue from 'vue'

const fetchPosts = ({dispatch, state}, {page, limit}) => {
  Vue.http.get(`posts/${state.year}`, {page, limit})
  .then(function(res) {
    if (res.data) {
      dispatch(FETCH_POSTS, res.data)
    }
  })
}

const setPage = ({dispatch}, page) => dispatch(SETTING_PAGE, page)

export {fetchPosts, setPage}