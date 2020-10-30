const express = require('express');

const UserController = require('./controllers/UserController');
const SenhaController = require('./controllers/SenhaController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/senha', SenhaController.index);
routes.post('/senha', SenhaController.store);

module.exports = routes;