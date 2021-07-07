const dotenv = require('dotenv')
dotenv.config()

const production = process.env.NODE_ENV === "production";

const URL = production ? "https://tech-center.herokuapp.com" : "http://localhost:3001";


module.exports = {URL};