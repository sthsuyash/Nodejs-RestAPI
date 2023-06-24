const { config } = require('dotenv')
config();  // load .env file into process.env object

exports.DB = {
    DB_NAME: process.env.DB_USER,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
}

exports.SERVER = {
    SERVER_PORT: process.env.SERVER_PORT
}
