const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/userscreatedb', UserController.clonedb);
routes.get('/users/:id', UserController.showusers);
routes.get('/userspag/:id', UserController.index);


module.exports = routes;
