import PostsList from '../../components/posts/post.list.vue'
import PostsDetail from '../../components/posts/posts.detail.vue'

const mapping = (router) => {
  router.map({
    '/': {
      component: PostsList
    },
    '/:year/:title': {
      name: 'postsDetail',
      component: PostsDetail
    }
  })
}

export {mapping as routerMapping}