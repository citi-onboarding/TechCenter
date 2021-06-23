import axios from 'axios';
import config from '../config/config';

const API = axios.create({
    baseURL: `${config}/api`
});

export default API;