const serverEnv = {
  production: {
    server: '127.0.0.1:3000'
  },
  development: {
    server: 'http://127.0.0.1:3000'
  }
}

const env = process.env['NODE_ENV'] || 'development'
export default serverEnv[env]