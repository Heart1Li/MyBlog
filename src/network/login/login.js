import '../request'
import { request } from '../request'

export default function Login(userData){
  return request({
    url:'/api/login',
    method:'post',
    data:userData
  })
}