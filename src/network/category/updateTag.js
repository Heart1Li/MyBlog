import '../request'
import { request } from '../request'

export default function UpdateTag(id,data){
  return request({
    url:`/api/category/${id}`,
    method:'post',
    data:data
  })
}