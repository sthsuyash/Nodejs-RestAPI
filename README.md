# RESTful API using Node.js

## Description

This is a RESTful API that allows users to create, read, update, and delete users. The API is written in Node.js and uses Express.js as the web framework. The API uses a PostgreSQL database to store the users. The API uses the Sequelize ORM to interact with the database.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a PostgreSQL database for the project.
4. Create a .env file in the root directory of the project. The .env file should contain the following:

   ```bash
   DB_NAME=database_name
   DB_USER=database_user
   DB_PASSWORD=database_password
   DB_HOST=database_host
   SERVER_PORT=server_port
   ```

   The **_'database_name'_**, **_'database_user'_**, **_'database_password'_**, and **_'database_host'_** should be replaced with the actual values for the database.

   The server_port should be replaced with the port that the server
   will listen on. The server_port is 3000 by default.

5. Run `npm run dev` to start the server.

## Using Docker

1. Clone the repository.
2. Run `docker-compose up -d` to start the server.
3. Run `docker compose down` to stop the server.

## Usage

The API has the following endpoints:

- POST /api/users - Creates a new contact.
- GET /api/users - Retrieves a list of all users.
- GET /api/users/:id - Retrieves a single contact by its unique identifier.
- PUT /api/users/:id - Updates an existing contact by its unique identifier.
- DELETE /api/users/:id - Deletes a contact by its unique identifier.

The API uses the following data model:

- id - The unique identifier for the contact.
- name - The name of the contact.
- email - The email address of the contact.
- phone - The phone number of the contact.

The API uses the following data validation rules:

- The name field is required.
- The email field is required and must be a valid email address.
- The phone field is required and must be a valid phone number.

## Testing

The API uses the Jest testing framework to test the API endpoints. The API uses the Supertest library to make HTTP requests in the tests. The API uses the Dotenv library to load environment variables from the .env file into the process.env object. The API uses the Nodemon library to automatically restart the server when changes are made to the code.

The API has the following tests:

- GET /api/users - Retrieves a list of all users.
- GET /api/users/:id - Retrieves a single contact by its unique identifier.
- POST /api/users - Creates a new contact.
- PUT /api/users/:id - Updates an existing contact by its unique identifier.
- DELETE /api/users/:id - Deletes a contact by its unique identifier.

## Logging

The API uses the Winston library to log information to the console and to a file.

## API Documentation

This API is documented using Postman. The Postman documentation link is : [https://documenter.getpostman.com/view/20437995/2s93z58izE](https://documenter.getpostman.com/view/20437995/2s93z58izE)

## Tasks Performed

- [x] An API endpoint is implemented that allows users to create new users. The data includes a name, email, and phone number.
- [x] An API endpoint is created that retrieves a list of all users.
- [x] An API endpoint is implemented that retrieves a single record by its unique identifier.
- [x] An API endpoint is added that allows users to update an existing record based on its unique identifier.
- [x] An API endpoint is implemented that deletes a record based on its unique identifier.
- [x] Appropriate data validation techniques are used to ensure the integrity and correctness of the data being stored.
- [x] Error cases are handled and provided appropriate error responses with proper HTTP status codes.
- [x] Unit tests are included using a testing framework like Jest to ensure the correctness of the API endpoints.
- [x] A relational database 'PostgreSQL' is used to store the users and an ORM called 'Sequelize' is for database operations.

## Architectural Decisions

- The application is built using Node.js and the Express framework, providing a lightweight and efficient web server for handling API requests.
- PostmanAPI is used for API documentation and specification. It provides a standardized format to describe the API endpoints, request/response payloads, and error codes.
- The application follows a modular structure, separating concerns into different files and folders (controllers, routes, models, etc.), promoting code organization and maintainability.
- Sequelize is used as an ORM (Object-Relational Mapping) library to interact with the database. It simplifies database operations and provides a higher-level abstraction for managing data.

## Challenges Faced

- Designing and implementing the database models and their relationships using Sequelize.
- Ensuring proper error handling and providing meaningful error responses to API consumers.
- Validating and sanitizing user input to prevent security vulnerabilities and data integrity issues.

## Additional Features Implemented

- Input Validation: Adding input validation to validate user input and prevent malicious data or malformed requests.
- Logging: Adding logging functionality to capture important events and errors for debugging and monitoring purposes.
- Pagination and Sorting: Implementing pagination and sorting functionality to handle large datasets returned by API endpoints.

## Author

Suyash Shrestha
