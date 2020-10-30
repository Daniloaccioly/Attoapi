const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Senha = require('../models/Senha');

const connection = new Sequelize(dbConfig);

//linkar modelo ao bd
User.init(connection);
Senha.init(connection);

module.exports = connection;