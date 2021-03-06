import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })
  //2.axios拦截器
  //2.1请求拦截的作用

  instance.interceptors.request.use(config => {
    //拦截器为每次请求添加上token
    config.headers.authorization = window.sessionStorage.getItem('loginToken')
    console.log(config.headers)
    return config

  }, err => {
    console.log(err);
  })

  //3.发送真正的请求
  return instance(config)
}