import axios from 'axios';

const MEDIUM = axios.create({
    baseURL: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed'
});

export default MEDIUM;