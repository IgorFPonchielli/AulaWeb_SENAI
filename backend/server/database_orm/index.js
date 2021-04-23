const sequelize = require('sequelize');
const config = require('./config/database');

const connection = new sequelize(config);

module.exports = connection;