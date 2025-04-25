const request = require('supertest');
const app = require('./app');

describe('Test de la route GET /', () => {
  it('devrait répondre avec le bon message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/Bienvenue sur .* 🚀/);
  });
});

