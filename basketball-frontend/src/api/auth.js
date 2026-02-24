import { request } from './client.js';

// backend verwendet /api/users/register und /api/users/login
export async function login(email, password) {
  return request('/users/login', { method: 'POST', body: { email, password } });
}

export async function register(firstName, lastName, email, password) {
  return request('/users/register', { method: 'POST', body: { firstName, lastName, email, password } });
}
