const { DataTypes } = require('sequelize');
const sequelize = require('../models/database');

// create user model which has name, email, and phone attributes
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, // null is not allowed
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, // will only allow email addresses
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true, // will only allow numbers
            len: [10, 10], // only allow values with length exactly 10
        },
    },
});

sequelize.sync(); // create table if not exists

module.exports = User;
