// users-service.js
// Serice modules hold the code that implements "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the AJAX request to the users-api.js
  // module.
  console.log("signUp Started")
  const token = await usersAPI.signUp(userData);
  console.log(token)
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  console.log("getToken users-service start")
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  // this will remove token from local storage to get rid of "saved" session
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()
    // checkToken returns a string, but let's 
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
}

