// send-request.js

import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null, startValue) {
    console.log("send-request is started")
    console.log(url)
    console.log(method)
    console.log(payload)
    console.log(startValue)
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    
    if (payload) {
        if (payload && startValue) {
            console.log("wow startValue")
            console.log(startValue)
            console.log(JSON.stringify(startValue))
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify({ startValue, payload })         
            console.log("options is here", options)
            console.log("options.body is here", options.body)
        } else {
            console.log("payload started")
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify(payload);
            console.log(options)
            console.log(options.body)
        }
    }

    const token = getToken();
    console.log("token ran")
    if (token) {
        // Ensure that headers object exists
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    console.log(options)
    const res = await fetch(url, options)
    
    console.log("this is res")
    console.log(res)
    

    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}