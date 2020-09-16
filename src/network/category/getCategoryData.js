import '../request'
import { request } from '../request'

export default function getCategoryData(){
  return request({
    url:'/api/category',
    method:'get'
  })
}