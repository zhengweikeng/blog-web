import serverConfig from './server.config'
const httpBaseConfig = (Vue) => {
  Vue.http.options.root = serverConfig.server
}
const interceptorsConfig = (Vue, router) => {
  Vue.http.interceptors.push({
    request: function (request) {
      return request
    },
    response: function (response) {
      if (response.status === 404) {
        router.go('/404')
        return
      }
      return response
    }
  })
}

export {httpBaseConfig, interceptorsConfig}