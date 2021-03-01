

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');
const Payment = require('../model/Payment');


const connection = new Sequelize(dbConfig);

User.init(connection);
Payment.init(connection);


User.associate(connection.models);
Payment.associate(connection.models);

module.exports = connection; 