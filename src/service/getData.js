import {request} from '../util/client'

export const signup = (name, pw) => request('user/signup', {
  name: name,
  password: pw
})

export const signin = (name, pw) => request('user/signin', {
  name: name,
  password: pw
})
