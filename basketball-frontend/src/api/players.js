import { request } from './client.js';

export async function getPlayers(params) {
  return request('/players', { params });
}

export async function getPlayer(id) {
  return request(`/players/${id}`);
}

export async function createPlayer(payload) {
  return request('/players', { method: 'POST', body: payload });
}

export async function updatePlayer(id, payload) {
  return request(`/players/${id}`, { method: 'PUT', body: payload });
}

export async function deletePlayer(id) {
  return request(`/players/${id}`, { method: 'DELETE' });
}
