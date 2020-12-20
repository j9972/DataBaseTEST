const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// mysql 강의에서 지원하는 코드인데 나는 아래에서 나오는 코드는 내가한것d

// const connection = mysql.createConnection({
//     host : process.env.HOST,
//     user : process.env.USER,
//     password : process.env.PASSWORD,
//     database : process.env.DATABASE,
//     port : process.env.DB_PORT,
// });

const connection = mysql.createConnection ({
    host : "localhost",
    user : "tutorial",
    password : "password",
    database : 'web_app',
    port : 3306,
    insecureAuth : true,
})

connection.connect((err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('db' + ' ' + connection.state);
})