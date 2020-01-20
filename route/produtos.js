const db = require('../database/db');
const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
   db.query('select * from produto',(erro,response)=>{
       if(erro){
           res.json({message:erro.message})
       }else{
           res.json(response)
       }
   })
});
routes.get('/:id',(req,res)=>{
    const {id} = req.params;
    db.query('select * from produto where id_produto=?',[id],(erro,response)=>{
        if(erro){
            res.json({message:erro.message})
        }else{
            res.json(response)
        }
    })
});
module.exports = routes;
