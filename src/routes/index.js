const express = require('express');
const app = express();
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Routes
app.post('/users', createUser);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

module.exports = app;   