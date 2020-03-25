const express = require('express'); //importa o modulo express 
const cors = require('cors');
const routes = require('./routes'); //importa o arquivo routes.js

const app = express();

app.use(cors());
app.use(express.json()); //Informa que será utilizado json nas rotas

app.use(routes); // Usa as rotas importadas do arquivo routes.js

app.listen(3333);