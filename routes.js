const express = require('express');
const auth = require('./src/auth');

const PayController = require('./src/Controllers/PayController');
const UserController = require('./src/Controllers/UserController');


const routes = express.Router();

routes.get('/users', auth,   UserController.index);
routes.post('/users', auth, UserController.store);
routes.delete('/user/delete/:id', auth,  UserController.delete);
routes.put('/user/update/:id', auth, UserController.renew);


routes.get('/users/:user_id/payments', auth, PayController.index) // adiconar o auth entre cada requisição -- depois de concluido
routes.post('/users/:user_id/payments', auth,  PayController.store)
routes.delete('/payment/delete/:id', auth, PayController.delete)






module.exports = routes;