import {request} from '../util/client'

export const signup = (name, pw) => request('user/signup', {
  name: name,
  password: pw
})

export const signin = (name, pw) => request('user/signin', {
  name: name,
  password: pw
})

export const queryProject = (uId) => request('project/query', {
  uId: uId
})

export const findProject = (pId) => request('project/find', {
  pId: pId
})

export const addProject = (uId, name) => request('project/add', {
  userId: uId,
  name: name
})

export const updateProject = (id, name) => request('project/update', {
  id: id,
  name: name
})

export const deleteProject = (id) => request('project/delete', {
  id: id
})
