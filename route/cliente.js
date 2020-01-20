const db = require('../database/db');
const express = require('express');
const routeCliente = express.Router();

routeCliente.get('/',(req,res)=>{
    db.query('select * from cadastro_cliente',(erro,response)=>{
        if(erro){
            res.json({message:erro.message})
        }else{
            res.json(response)
        }
    })
});

module.exports = routeCliente;
