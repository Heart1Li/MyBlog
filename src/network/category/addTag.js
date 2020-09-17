import '../request'
import { request } from '../request'

export default function addTag(type){
  return request({
    url:`/api/category/${type}`,
    method:'get'
  })
}