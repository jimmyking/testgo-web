import App from '../App'
import header from '../components/header/header'

const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [
  {
    path: '/',
    components: {
      default: App,
      header: header
    },
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/login',
        component: login
      },
      {
        path: '/home',
        component: home
      }
    ]
  }
]
