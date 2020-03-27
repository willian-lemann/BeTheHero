const express = require('express');

const OngController = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);
routes.delete('/ongs/:id', OngController.destroy);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.destroy);

module.exports = routes;