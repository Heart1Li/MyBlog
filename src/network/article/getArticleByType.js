import '../request'
import { request } from '../request'

export default function getArticleByType(type){
  return request({
    url:`/api/article/${type}/category`,
    method:'get'
  })
}