const mysql = require('mysql');

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inmobiliaria'
});*/

const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'inmueble',
  password: 'inmueblepass',
  database: 'inmueble'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

const db = connection;

module.exports = { db };