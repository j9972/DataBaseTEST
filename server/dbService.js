const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// mysql 강의에서 지원하는 코드인데 나는 아래에서 나오는 코드는 내가한것 + git에서 에러가 나서 해결해보는중 3

// const connection = mysql.createConnection({
//     host : process.env.HOST,
//     user : process.env.USER,
//     password : process.env.PASSWORD,
//     database : process.env.DATABASE,
//     port : process.env.DB_PORT,
// });

const connection = mysql.createConnection ({ // workbench를 이용한 사람은 이런식으로 mysql을 연결 시킴
    host : "localhost",
    user : "tutorial",
    password : "password",
    database : 'web_app', // workbench에서 스키마의 이름을 써야 하는거같은데
    port : 3306,
    insecureAuth : true,
})

connection.connect((err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('db' + ' ' + connection.state);
})