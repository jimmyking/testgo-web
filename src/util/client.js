import axios from 'axios'
import {baseUrl} from '../config/env'
import Qs from 'qs'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  validateStatus: function (status) {
    return status < 500
  },
  headers: {
    // 跨域请求 这个配置不能少
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json'
  }
})

export const request = (url = '', data = {}, type = 'post') => {
  if (type === 'post') {
    return instance.post(baseUrl + url, Qs.stringify(data))
  }
  if (type === 'get') {
    return instance.get(baseUrl + url, {
      params: data
    })
  }
}
