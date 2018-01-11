
let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:9090/'
} else {
  baseUrl = 'http://xxx:8080/'
}

export {
  baseUrl
}
