import '../request'
import { request } from '../request'

export default function updateArticleData(id,data){
  return request({
    url:`/api/article/update/${id}`,
    method:'post',
    data:data,
  })
}