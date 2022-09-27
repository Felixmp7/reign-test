import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

const network = axios.create({
    baseURL: url,
    responseType: 'json',
});

export default network;
