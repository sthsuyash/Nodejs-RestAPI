const express = require('express');
const app = express();

// body parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import SERVER constant from constants
const { SERVER } = require('./constants');
const PORT = SERVER.SERVER_PORT || 3000;

//test route
app.get('/', (req, res, next) => {
    res.send('<h1>Hello World</h1>');
});

// import api routes
const routes = require('./routes');
// all routes will be prefixed with /api
app.use('/api', routes);

// function to start the server
const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })
    } catch (error) {
        // if there is an error, log it and exit the process
        console.error('Error starting server: ', error);
    }
}

startServer(); // start the server
