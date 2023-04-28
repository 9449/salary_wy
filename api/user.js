import request from '../utils/request'

export function login(data) {
  return request('/api/user/login',data);
}

export function getCurrentUserDetail() {
  return request("/api/user");
}

export function page(data) {
  return request("/api/user/search/page",data);
}

export function add(data) {
  return request("/api/user/add",data);
}

export function deleteUser(data) {
  return request("/api/user/delete",data);
}

export function listType() {
  return request("/api/user/list/type");
}
