import '../request'
import { request } from '../request'

export default function deleteTag(id){
  return request({
    url:`/api/category/delete/${id}`,
    method:'delete'
  })
}