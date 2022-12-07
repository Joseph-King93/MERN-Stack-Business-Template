// API modules are where the code lives to communicate with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
  console.log("signUp in user-API")
  console.log(userData)
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  // console.log("checkToken userApi started")
  return sendRequest(`${BASE_URL}/check-token`);
}