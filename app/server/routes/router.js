const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /create
 */
route.get('/create', services.create)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update', services.update)

/**
 *  @description for update user
 *  @method GET /update-user
 */
 route.get('/download', services.download)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route