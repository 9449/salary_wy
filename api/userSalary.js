import request from '../utils/request'

export function add(data) {
  return request('/api/user/salary/detail/add',data);
}


export function detailInfos(data) {
  return request('/api/user/salary/detail/infos',data);
}

export function detailMonth(data) {
  return request('/api/user/salary/detail/month',data);
}