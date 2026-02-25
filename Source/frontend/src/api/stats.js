import { request } from './client.js';

export async function getSessionStats(sessionId) {
  return request(`/stats/session/${sessionId}`);
}

export async function getPlayerStats(playerId) {
  return request(`/stats/player/${playerId}`);
}

export async function getPlayerTrend(playerId) {
  return request(`/stats/player/${playerId}/trend`);
}
