const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const sequelize = require('./sequelize');

const app = express();

//for parsingapplication/json
app.use(bodyParser.json());

//for parsingapplication/xwww-
app.use(bodyParser.urlencoded({extended: true}));

//Access control-Allow-Origin
app.use(cors());

// PostgreSQL Connection
sequelize.authenticate();

//views engine setup
app.set('views', __dirname.replace("config", "app/views"));
app.set('view engine', 'ejs');


module.exports = function (){
    require('../app/routes/route')(app);
    app.use(express.static('./public'));
    return app;
}

