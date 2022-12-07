// categoriesAPI.js

import sendRequest from "./send-request";
const BASE_URL="/api/categories";

export function getAllCategories() {
    // console.log("categories-api started")
    return sendRequest(BASE_URL);
}

export function addCategory(formData, currentCategory) {
    console.log("addCategoryAPI started")
    console.log(formData)
    console.log(currentCategory)
    return sendRequest(`${BASE_URL}/${currentCategory}new`, 'POST', formData)
}

export function deleteCategory(formData) {
    console.log("deleteCategoryAPI started")
    console.log(formData)
    return sendRequest(`${BASE_URL}/delete`, 'POST', formData)
}