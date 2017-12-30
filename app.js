var express = require('express');
var r_persona = require('./routes/r_persona');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/tesoreria', r_persona);


module.exports = app;
