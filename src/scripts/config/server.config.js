const serverEnv = {
  production: {
    server: '192.168.31.225:3000'
  },
  development: {
    server: 'http://192.168.31.225:3000'
  }
}

const env = process.env['NODE_ENV'] || 'development'
export default serverEnv[env]