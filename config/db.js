const Client = require('pg').Client
const dotenv = require('dotenv')

dotenv.config()

const cliente = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

module.exports = cliente