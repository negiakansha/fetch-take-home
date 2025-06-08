const BASE_URL = 'https://frontend-take-home-service.fetch.com';

//Fetch with Creds
const fetchWithCreds = (url, options = {}) =>
  fetch(`${BASE_URL}${url}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  }).then(async (res) => {
    if (!res.ok) throw new Error('API request failed');

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return res.json();
    } else {
      // no json to parse
      return null;
    }
  });

//Login
export const login = (name, email) =>
  fetchWithCreds('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ name, email }),
  });

//API calls
export const fetchBreeds = () => fetchWithCreds('/dogs/breeds');

export const searchDogs = (params) =>
  fetchWithCreds(`/dogs/search${params}`, { method: 'GET' });

export const getDogsByIds = (ids) =>
  fetchWithCreds('/dogs', {
    method: 'POST',
    body: JSON.stringify(ids),
  });

export const matchDogs = (dogIds) =>
  fetchWithCreds('/dogs/match', {
    method: 'POST',
    body: JSON.stringify(dogIds),
  });
