import { request } from './client.js';

export async function getSessions(params) {
  return request('/sessions', { params });
}

export async function getSession(id) {
  return request(`/sessions/${id}`);
}

export async function getSessionsByPlayer(playerId) {
  return request(`/sessions/player/${playerId}`);
}

export async function createSession(payload) {
  return request('/sessions', { method: 'POST', body: payload });
}

// If you need to import analysis metadata (no file upload endpoint exists), use this
export async function importAnalysis(dto) {
  return request('/analysis/import', { method: 'POST', body: dto });
}
