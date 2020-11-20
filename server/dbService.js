const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.DB_PORT,
});

// const connection = mysql.createConnection ({
//     host : "localhost",
//     user : "tutorial",
//     password : "password",
//     database : 'web_app',
//     port : 3306,
//     insecureAuth : true,
// })

connection.connect((err) => {
    if(err) {
        console.log(err.message + '에러남');
    }
    console.log('db' + ' ' + connection.state);
})