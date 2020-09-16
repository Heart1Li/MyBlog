import '../request'
import { request } from '../request'

export default function getArticlesData(){
  return request({
    url:'/api/article',
    method:'get'
  })
}