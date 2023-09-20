import * as adminAPI from './admin-api'

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }

  return token;
}

export function getAdmin() {
  const token = getToken();
  console.log(token)
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export async function signUp(adminData) {
  const token = await adminAPI.signUp(adminData);

  localStorage.setItem('token', token);

  return getAdmin();
}

export async function login(credentials) {
  const token = await adminAPI.login(credentials)

  localStorage.setItem('token', token);

  return getAdmin()
}

export async function checkToken() {
  return adminAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}

export function logOut() {
  localStorage.removeItem('token');
}