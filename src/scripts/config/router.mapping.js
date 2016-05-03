import Home from '../../components/home/home.vue'

const mapping = (router) => {
  router.map({
    '/': {
      component: Home
    }
  })
}

export {mapping as routerMapping}