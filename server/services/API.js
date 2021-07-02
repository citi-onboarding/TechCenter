const axios = require('axios');
const { URL } = require('../config/config.js');

const API = axios.create({
    baseURL: `${URL}/api`
});

module.exports = {
    API
}