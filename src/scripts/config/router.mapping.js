import PostList from '../../components/posts/post.list.vue'

const mapping = (router) => {
  router.map({
    '/': {
      component: PostList
    }
  })
}

export {mapping as routerMapping}