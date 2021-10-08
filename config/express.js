const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

require('./sequelize');

module.exports = function (){
    require('../app/routes/route')(app);
    return app;
}
