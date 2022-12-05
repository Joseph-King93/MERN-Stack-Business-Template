// categoriesAPI.js

import sendRequest from "./send-request";
const BASE_URL="/api/categories";

export function getAllCategories() {
    // console.log("categories-api started")
    return sendRequest(BASE_URL);
}

export function addCategory(formData) {
    console.log("addCategoryAPI started")
    return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}