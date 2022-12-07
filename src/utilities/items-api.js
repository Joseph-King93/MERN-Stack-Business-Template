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
    return sendRequest(`${BASE_URL}/${currentCategory}/new`, 'POST', formData)
}

export function deleteItem(formData) {
    console.log("deleteItemAPI started")
    console.log(formData)
    return sendRequest(`${BASE_URL}/delete`, 'POST', formData)
}