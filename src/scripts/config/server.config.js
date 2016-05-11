const serverEnv = {
  production: {
    server: 'http://115.28.176.80:8000'
  },
  development: {
    server: 'http://127.0.0.1:3000'
  }
}

const env = process.env['NODE_ENV'] || 'development'
export default serverEnv[env]