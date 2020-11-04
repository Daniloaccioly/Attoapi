const express = require('express');
const cors = require('cors');

const UserController = require('./controllers/UserController');
const SenhaController = require('./controllers/SenhaController');

const routes = express.Router();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/senha', SenhaController.index);
routes.post('/senha', cors(corsOptions), SenhaController.store);

module.exports = routes;