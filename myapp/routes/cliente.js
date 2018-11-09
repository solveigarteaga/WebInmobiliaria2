var express = require('express');
var router = express.Router();
const conn = require('../database/db');

router.get('/getAllClients', function(req, res){
	conn.db.query("SELECT * FROM cliente", function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		});
	});
});

router.post('/newClient', function(req, res, next){
	console.log(req.body);
	conn.db.query("INSERT INTO cliente (nombre, apellido, telefono, correo, mensaje)VALUES(?,?,?,?,?)", [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo, req.body.mensaje], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})	
});

module.exports = router;
