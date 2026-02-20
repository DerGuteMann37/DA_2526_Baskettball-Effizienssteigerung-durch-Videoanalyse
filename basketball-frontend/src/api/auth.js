import { request } from './client.js';

export async function login(username, password) {
  // erwartet: { token: '...' }
  return request('/auth/login', { method: 'POST', body: { username, password } });
}

export async function refresh() {
  return request('/auth/refresh', { method: 'POST' });
}
