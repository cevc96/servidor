const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://postgres:postgres@localhost:5432/smiledu?application_name=smiledu_nodejs");
var app = require('./app');

var port = process.env.PORT || 3978; 
db.connect();

app.listen(port, function(){
    console.log('Levanto correctamente en el puerto ' + port);
});

exports.conection = db;