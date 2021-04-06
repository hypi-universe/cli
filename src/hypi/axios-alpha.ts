import axios from 'axios';

//read base url from hypi.yaml
const instance = axios.create({
    baseURL: 'https://api.hypi.app/',
    headers: {
        'accept': 'application/json, text/plain, */*',
        'content-type' : 'application/json'
    }
});

export default instance;