const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Raiz de las rutas
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description para agregar carnet
 *  @method GET /create-carnet
 */
route.get('/create-carnet', services.create_carnet)

/**
 *  @description para actualizar carnet
 *  @method GET /update-carnet
 */
route.get('/update-carnet', services.update_carnet)

/**
 *  @description para descargar carnet
 *  @method GET /download
 */
 route.get('/download', services.download)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;