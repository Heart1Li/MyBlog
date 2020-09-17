import '../request'
import { request } from '../request'

export default function getArticleById(id){
  return request({
    url:`/api/article/${id}`,
    method:'get'
  })
}