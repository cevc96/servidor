'use strict'

var db = require('../index');
function getPersonas(respuesta){
    var sql = `SELECT *
                 FROM persona
                LIMIT 5`;
    db.conection.any(sql)
    .then(function (data) {
        respuesta(data);
    }) .catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    getPersonas
}