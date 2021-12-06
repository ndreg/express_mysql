const mysql = require('mysql');
const dataConnection = require('./configuration');

const connection = mysql.createConnection(dataConnection);

connection.connect((err) => {
	if(err) console.log('Ha sucedido un error');
	else console.log('Conectado correctamente')
})

module.exports = connection

