import mutationType from '../config/mutation.type'

const fetchPosts = ({dispatch}, params) => dispatch(mutationType.FETCH_POSTS, params)

export {fetchPosts}