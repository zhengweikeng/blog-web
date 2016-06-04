const serverEnv = {
  development: {
    server: 'http://127.0.0.1:3000'
  },
  integration: {
    server: 'http://zhengweikeng-blog-server.daoapp.io'
  },
  production: {
    server: 'http://zhengweikeng-blog-server.daoapp.io'
  },
}

const env = process.env['NODE_ENV'] || 'development'
export default serverEnv[env]