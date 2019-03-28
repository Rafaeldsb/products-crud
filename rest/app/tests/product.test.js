const request = require('supertest');
const server = require('../app.js');


describe('GET /', () => {
    it('status OK', function(done) {
        request(server)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});