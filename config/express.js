const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const sequelize = require('./sequelize');
const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));

// Acces-Control-Allow-Origin
app.use(cors());

// view engine setup
app.set('views',__dirname.replace("config","app/views"));
app.set('view engine','ejs');

// PostgreSQL Connection
sequelize.authenticate();

module.exports = function (){

    require('../app/routes/route')(app);
    app.use(express.static('./public'));

    return app;
}
