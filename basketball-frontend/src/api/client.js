// Minimaler Fetch-Wrapper für Backend-Anfragen
const API_BASE = window.__API_BASE__ || (location.origin + '/api');

function buildUrl(path, params) {
  let url = API_BASE + path;
  if (params && Object.keys(params).length) {
    const qs = new URLSearchParams(params).toString();
    url += `?${qs}`;
  }
  return url;
}

export async function request(path, options = {}) {
  const { method = 'GET', headers = {}, body = null, params = null, isFormData = false } = options;
  const url = buildUrl(path, params);

  const token = localStorage.getItem('auth_token');
  const hdrs = { ...headers };
  if (!isFormData && body && typeof body === 'object') hdrs['Content-Type'] = 'application/json';
  if (token) hdrs['Authorization'] = `Bearer ${token}`;

  const fetchOpts = { method, headers: hdrs };
  if (body) fetchOpts.body = isFormData ? body : JSON.stringify(body);

  const res = await fetch(url, fetchOpts);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const error = new Error(`Request failed ${res.status} ${res.statusText}`);
    error.status = res.status;
    error.body = text;
    throw error;
  }

  if (res.status === 204) return null;
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}

export default { request, API_BASE };
