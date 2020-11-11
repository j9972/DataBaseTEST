const express = require('express');
const app = express();
const cors = require('cors');
const dotenv  = require('dotenv');
const { urlencoded } = require('express');

dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// create
app.post('/insert', (req,res) => {

});

//read
app.get('/getAll', (req, res) => {
    res.json({
        success: true // 브라우저 f12 console 창에 보임
    })
})

//update

//delete

app.listen(process.env.PORT, () => console.log('app is running'));