const request = require('supertest');
const app = require('../routes');
const { error } = require('winston');

describe('User', () => {
    it('should create a new user 1', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: "Shyam Ranja",
                email: "shyam@example.com",
                phone: "1234567890"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Shyam Ranja');
        expect(response.body.email).toBe('shyam@example.com');
        expect(response.body.phone).toBe('1234567890');
    });

    it('should create a new user 2', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: "Hari Prasad",
                email: "hari@example.com",
                phone: "0123456789"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Hari Prasad');
        expect(response.body.email).toBe('hari@example.com');
        expect(response.body.phone).toBe('0123456789');
    });

    it('should create a new user 3', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: "Geeta Kumari",
                email: "geeta@example.com",
                phone: "123456780"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Geeta Kumari');
        expect(response.body.email).toBe('geeta@example.com');
        expect(response.body.phone).toBe('123456780');
    });

    it('should get all users', async () => {
        const response = await request(app)
            .get('/users');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get a user by id', async () => {
        const response = await request(app)
            .get('/users/1');

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Shyam Ranja');
        expect(response.body.email).toBe('shyam@example.com');
        expect(response.body.phone).toBe('1234567890');
    });

    it('should get a user by id', async () => {
        const response = await request(app)
            .get('/users/3');

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Geeta Kumari');
        expect(response.body.email).toBe('geeta@example.com');
        expect(response.body.phone).toBe('123456780');
    });

    it('should get a user by id', async () => {
        const response = await request(app)
            .get('/users/2');

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Hari Prasad');
        expect(response.body.email).toBe('hari@example.com');
        expect(response.body.phone).toBe('0123456789');
    });

    it('should update a user by id', async () => {
        const response = await request(app)
            .put('/users/1')
            .send({
                name: 'Shyam Ranja',
                email: 'shyam2@example.com',
                phone: '2345678900'
            });
    });

    it('should delete a user by id', async () => {
        const response = await request(app)
            .delete('/users/1');

        expect(response.statusCode).toBe(200);
    });

    it('should not get a user by id', async () => {
        const response = await request(app)
            .get('/users/1');

        expect(response.statusCode).toBe(404);
    });

    it('should not update a user by id', async () => {
        const response = await request(app)
            .put('/users/1')
            .send({
                name: 'Shyam Ranja',
                email: 'shyam3@gmail.com',
                phone: '1023456789'
            });

        expect(response.statusCode).toBe(404);
    });

    it('should not delete a user by id', async () => {
        const response = await request(app)
            .delete('/users/1');

        expect(response.statusCode).toBe(404);
    });

    it('should get 1st page with 1 user', async () => {
        const response = await request(app)
            .get('/users')
            .query({ page: 1, limit: 1 });

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it('should get 2nd page with 1 user', async () => {
        const response = await request(app)
            .get('/users')
            .query({ page: 2, limit: 1 });

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it('should get users with name in ascending order', async () => {
        const response = await request(app)
            .get('/users')
            .query({ sort: 'name' });

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get users with name Geeta', async () => {
        const response = await request(app)
            .get('/users')
            .query({ name: 'Geeta' });

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });
});
