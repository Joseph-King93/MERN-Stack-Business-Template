// send-request.js

import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
    console.log("send-request is started")
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    // console.log(options)
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    // console.log(token)
    if (token) {
        // Ensure that headers object exists
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options)
    
    // console.log("this is res")
    // console.log(res)
    

    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}