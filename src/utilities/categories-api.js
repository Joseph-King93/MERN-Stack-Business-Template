// categoriesAPI.js

import sendRequest from "./send-request";
const BASE_URL="/api/categories";

export function getAllCategories() {
    return sendRequest(BASE_URL);
}

export function addCategory(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

export function deleteCategory(formData) {
    return sendRequest(`${BASE_URL}/delete`, 'POST', formData)
}

export function updateCategory(formData, startValue) {
    return sendRequest(`${BASE_URL}/update`, 'POST', formData, startValue)
}