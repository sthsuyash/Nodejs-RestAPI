const request = require('supertest');
const app = require('../routes')

describe('User', () => {
    it('should create a new user', async () => {
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

    it('should get all users', async () => {
        const response = await request(app)
            .get('/users');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    }
    );

    it('should get a user by id', async () => {
        const response = await request(app)
            .get('/users/1');

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Shyam Ranja');
        expect(response.body.email).toBe('shyam@example.com');
        expect(response.body.phone).toBe('1234567890');
    }
    );

    it('should update a user by id', async () => {
        const response = await request(app)
            .put('/users/1')
            .send({
                name: 'Shyam Ranja',
                email: 'shyam2@example.com',
                phone: '0123456789'
            });
    });

    it('should delete a user by id', async () => {
        const response = await request(app)
            .delete('/users/1');

        expect(response.statusCode).toBe(200);
    }
    );

    it('should not get a user by id', async () => {
        const response = await request(app)
            .get('/users/1');

        expect(response.statusCode).toBe(404);
    }
    );

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

});
