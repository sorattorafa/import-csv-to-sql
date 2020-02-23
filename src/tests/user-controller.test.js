const app = require('../app');
const request = require('supertest');
const User = require('../models/Users');

let userId;
beforeEach(async () => {
  const { id } = await User.create({
    name: 'Valid Name',
    email: 'valid_email@email.com.br',
  });
  userId = id;
});

afterEach(() => {
  User.destroy({
    where: {
      id: userId,
    },
  });
});

describe('Teste para uma rota que não existe na API', () => {
  test('Retorno de erro', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(404);
    expect(res.body.data).toBeUndefined();
  });
});

describe('Teste para rota GET: /userspag/:id', () => {
  test('Testa o caso de sucesso para esta rota', async () => {
    const page = 1;
    const res = await request(app).get(`/userspag/${page}`);
    expect(res.status).toBe(200);
    expect(res.body.data).not.toBeNull();
  });
  test('Testa o caso de fracasso para esta rota', async () => {
    const res = await request(app).get('/userspag/');
    expect(res.status).toBe(404);
  });
});

describe('Teste para rota GET: /user/:id', () => {
  test('Testa o caso de sucesso para esta rota', async () => {
    const res = await request(app).get(`/user/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body.data).not.toBeNull();
  });
  test('Testa o caso de fracasso para esta rota', async () => {
    const res = await request(app).get('/user/');
    expect(res.status).toBe(404);
  });
});

describe('Teste para rota PUT: /user/:id', () => {
  test('Testa o caso de sucesso para esta rota', async () => {
    const res = await request(app).put(`/user/${userId}`).send({
      list: '1, 2',
    });
    expect(res.status).toBe(201);
    expect(res.body.data).not.toBeNull();
  });
});
