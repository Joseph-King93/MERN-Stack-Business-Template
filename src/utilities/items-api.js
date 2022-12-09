// itemsAPI.js

import sendRequest from "./send-request";
const BASE_URL="/api/categories";

export function getAllItems() {
    return sendRequest(BASE_URL);
}

export function addItem(formData, currentCategory) {
    return sendRequest(`${BASE_URL}/${currentCategory}/new`, 'POST', formData)
}

export function deleteItem(formData, currentCategory) {
    return sendRequest(`${BASE_URL}/${currentCategory}/delete`, 'POST', formData)
}

export function updateItem(formData, currentCategory, startValue) {
    return sendRequest(`${BASE_URL}/${startValue.currentCategory}/update`, 'POST', formData, startValue)
}