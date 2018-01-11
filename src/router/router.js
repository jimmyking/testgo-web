const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const signup = r => require.ensure([], () => r(require('../page/signup/signup')), 'signup')
const header = r => require.ensure([], () => r(require('../components/header/header')), 'header')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const project = r => require.ensure([], () => r(require('../page/project/project')), 'project')
const addProject = r => require.ensure([], () => r(require('../page/project/child/addProject')), 'addProject')
const modelList = r => require.ensure([], () => r(require('../page/model/model')), 'model')
const addModel = r => require.ensure([], () => r(require('../page/model/child/addModel')), 'addModel')
const featureList = r => require.ensure([], () => r(require('../page/feature/feature')), 'feature')
const addFeature = r => require.ensure([], () => r(require('../page/feature/child/addFeature')), 'addFeature')

export default [
  {
    path: '/login',
    component: login
  },
  {
    path: '/signup',
    component: signup
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
      },
      {
        path: 'model/:pId/feature/:mId',
        name: 'featureList',
        component: featureList
      },
      {
        path: 'model/:pId/feature/:mId/add',
        name: 'addFeature',
        component: addFeature
      }
    ]
  }
]
