const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const header = r => require.ensure([], () => r(require('../components/header/header')), 'header')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const project = r => require.ensure([], () => r(require('../page/project/project')), 'project')
const addProject = r => require.ensure([], () => r(require('../page/project/child/addProject')), 'addProject')
const modelList = r => require.ensure([], () => r(require('../page/model/model')), 'model')
const addModel = r => require.ensure([], () => r(require('../page/model/child/addModel')), 'addModel')

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
        path: 'home',
        component: home
      },
      {
        path: 'project',
        component: project
      },
      {
        path: 'addProject',
        component: addProject
      },
      {
        path: 'model/:pId',
        name: 'modelList',
        component: modelList
      },
      {
        path: 'model/:pId/add',
        name: 'addModel',
        component: addModel
      }
    ]
  }
]
