import request from '../../utils/request.js'

export function list() {
  return request('/api/salary/template/list');
}


export function change(data) {
  return request('/api/salary/template/change',data);
}
