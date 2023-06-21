const { DataTypes } = require('sequelize');
const sequelize = require('../models/database');

// create user model which has name, email, and phone attributes
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    },
});

sequelize.sync(); // create table if not exists

module.exports = User;
