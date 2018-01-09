const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const header = r => require.ensure([], () => r(require('../components/header/header')), 'header')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: header,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      }
    ]
  }
]
