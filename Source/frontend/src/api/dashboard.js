import { request } from './client.js';

export async function getPlayerDashboard(playerId) {
  return request(`/dashboard/player/${playerId}`);
}
