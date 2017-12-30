'use strict' 
var express = require('express');
var c_persona = require('../controller/c_persona');
var api = express.Router();

api.get('/getPersonas', c_persona.getPersonas);
api.post('/getPersonas', c_persona.getPersonas);

module.exports = api;