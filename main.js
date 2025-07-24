const {Client} = require('pg');

const connect = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})

connect.connect().then(() => console.log('connected'));

connect.query('select * from guru', (err, res) =>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
})