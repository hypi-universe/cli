import axios from 'axios';

//read base url from hypi.yaml
const instance = axios.create({
    baseURL: 'https://api.alpha.hypi.dev/',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'content-type' : 'application/json'
    }
});

export default instance;