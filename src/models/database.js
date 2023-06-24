const Sequelize = require('sequelize');
const { DB } = require('../constants/index');

const sequelize = new Sequelize(`${DB.DB_USER}`, `${DB.DB_USER}`, `${DB.DB_PASSWORD}`, {
    host: `${DB.DB_HOST}`,
    dialect: 'postgres'
});

module.exports = sequelize;
