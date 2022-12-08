// itemsAPI.js

import sendRequest from "./send-request";
const BASE_URL="/api/categories";

export function getAllItems() {
    console.log("items-api started")
    return sendRequest(BASE_URL);
}

export function addItem(formData, currentCategory) {
    console.log("addItemAPI started")
    console.log(formData)
    console.log(currentCategory)
    return sendRequest(`${BASE_URL}/${currentCategory}/new`, 'POST', formData)
}

export function deleteItem(formData, currentCategory, startValue) {
    console.log("deleteItemAPI started")
    console.log(formData)
    console.log(currentCategory)
    return sendRequest(`${BASE_URL}/${currentCategory}/delete`, 'POST', formData)
}

export function updateItem(formData, currentCategory, startValue) {
    console.log(formData)
    console.log(currentCategory)
    console.log(startValue)
    console.log(startValue.startValue)
    console.log(startValue.currentCategory)
    console.log("updateItemAPI started")
    return sendRequest(`${BASE_URL}/${startValue.currentCategory}/update`, 'POST', formData, startValue)
}