const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/userscreatedb', UserController.clonedb);
routes.get('/user/:id', UserController.showusers);
routes.get('/userspag/:id', UserController.index);
routes.put('/user/:id', UserController.updateuser);


module.exports = routes;
