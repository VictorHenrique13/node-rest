const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database : 'vitoria'
})
db.connect(error=>{
    if(error){
        console.log(error.message)
    }else{
        console.log('Sucesso')
    }
});
module.exports = db;
