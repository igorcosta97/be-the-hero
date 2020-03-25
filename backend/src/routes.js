const express = require('express');

//Importando Controllers de Rotas
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//SessionController
routes.post('/sessions',SessionController.create);


//OngController
//ROTA LISTAR TODAS ONGS
 routes.get('/ongs',OngController.index);
//ROTA CADASTRO DE ONGS
routes.post('/ongs', OngController.create);

//IncidentController
//ROTA LISTAR TODAS Incidents
routes.get('/incidents',IncidentController.index);
//Rota de cadastro de Incidents
routes.post('/incidents', IncidentController.create);
//Rota para deletar incidents
routes.delete('/incidents/:id', IncidentController.delete );

//ProfilleController
routes.get('/profile',ProfileController.index);

module.exports = routes; //exporta as rotas