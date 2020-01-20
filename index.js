const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || '9000';
const cors = require('cors');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
const routeA = require('./route/auth')
const route = require('./route/produtos');
const routeCliente = require('./route/cliente');
const routeCadastro = require('./route/cadastro');
app.use('/produtos',route);
app.use('/cliente',routeCliente);
app.use('/cadastro',routeCadastro);
app.use('/auth',routeA);
app.listen(port, ()=>{
    console.log('Rodando na porta: '+ port)
});
