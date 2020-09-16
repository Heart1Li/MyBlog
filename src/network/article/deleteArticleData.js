import '../request'
import { request } from '../request'

export default function deleteArticleData(data){
  return request({
    url:`/api/article/delete/${data}`,
    method:'delete',
    // params:data
  })
}