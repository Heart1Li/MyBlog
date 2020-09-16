import '../request'
import { request } from '../request'

export default function postArticleData(data){
  return request({
    url:'/api/article/add',
    method:'post',
    data:data,
  })
}