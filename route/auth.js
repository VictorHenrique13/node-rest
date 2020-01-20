const db = require('../database/db');
const express = require('express');
const authRoute = express.Router();
const bcrypt = require('bcrypt');
const secret = require('../config/conf');
const jwt = require('jsonwebtoken');
authRoute.get('/login',(req,res)=>{
    const {email,senha} = req.body;
    console.log(email)
    db.query('select * from cadastro_funcionario where email=?',[email],(erro,response)=>{
        if(erro){
            res.json({message:erro.message})
        }else{
            res.json(response)

        }
    })
});
module.exports = authRoute;
