const express = require('express');
const app = express();

// import SERVER constant from constants
const { SERVER } = require('./constants');
const PORT = SERVER.SERVER_PORT || 3000;

// body-parser to parse incoming requests to req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// import api routes
const routes = require('./routes');
// all routes will be prefixed with /api
app.use('/api', routes);

// import swagger
const swagger = require('./swagger');
// use swagger
swagger(app);

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