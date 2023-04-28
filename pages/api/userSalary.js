import request from '../../utils/request.js'

export function add(data) {
  return request('/api/user/salary/detail/add',data);
}


export function detailInfos(data) {
  return request('/api/user/salary/detail/infos',data);
}