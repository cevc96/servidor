'use strict' 
var m_persona = require('../model/m_persona');

function getPersonas(req, res){
    var result = {};
    console.log(req.params);
    m_persona.getPersonas(function(data){
        result = data;
        res.status(200).send(result);
    });
}

module.exports = {
    getPersonas
}