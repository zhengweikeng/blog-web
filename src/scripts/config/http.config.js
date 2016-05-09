import serverConfig from './server.config'
import Vue from 'vue'
const httpBaseConfig = () => {
  Vue.http.options.root = serverConfig.server
}
const interceptorsConfig = (router) => {
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