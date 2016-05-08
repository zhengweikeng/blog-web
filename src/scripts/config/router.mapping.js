import PostsList from '../../components/posts/posts.list.vue'
import PostsDetail from '../../components/posts/posts.detail.vue'
import PostsTag from '../../components/posts/posts.tag.vue'

const mapping = (router) => {
  router.map({
    '/': {
      component: PostsList
    },
    '/:year/:title': {
      name: 'postsDetail',
      component: PostsDetail
    },
    '/tag/:tag': {
      name: 'tag',
      component: PostsTag
    }
  })
}

export {mapping as routerMapping}