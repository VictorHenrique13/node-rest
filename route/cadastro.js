const db = require('../database/db');
const express = require('express');
const bcrypt = require('bcrypt');
const routeCadastro = express.Router();
const secret = '#278662peaking#';
routeCadastro.post('/cliente',(req,res)=>{
    const {nome} = req.body
    db.query('insert into cadastro_cliente(nome) values(?)',[nome],(erro,result)=>{
        if(erro){
            res.json({message:erro.message})
        }else{
            res.json({message: result.insertId})
        }
    })
})
routeCadastro.post('/produto',(req,res)=>{
    const {nome_produto,categoria,valor_compra,valor_venda,codigo_produto} = req.body
    db.query('insert into produto(nome_produto,categoria,valor_compra,valor_venda,codigo_produto) values(?, ?, ?, ?, ?)',
        [nome_produto,categoria,valor_compra,valor_venda,codigo_produto],(erro,result)=>{
        if(erro){
            res.json({message:erro.message})
        }else{
            res.json({message: result.insertId})
        }
    })
})
routeCadastro.post('/funcionario',(req,res)=>{
    const {nome,email,senha} = req.body;
    let senhaCp = bcrypt.hashSync(senha,2);
    db.query('insert into cadastro_funcionario(nome,email,senha) values(?, ?, ?)',
        [nome,email,senhaCp],(erro,result)=>{
            if(erro){
                res.json({message:erro.message})
            }else{
                res.json({message: result.insertId})
            }
        })
})
module.exports = routeCadastro;
