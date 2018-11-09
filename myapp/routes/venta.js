var express = require('express');
var router = express.Router();
const conn = require('../database/db');

router.post('/newVenta', function(req, res){
	conn.db.query("INSERT INTO venta (id_cliente, id_propiedad, status, fecha)VALUES(?,?,?,?)", [req.body.id_cliente, req.body.id_propiedad, req.body.status, req.body.fecha], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.get('/getVentas', function(req, res){
	conn.db.query("SELECT * FROM Ventas", function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

module.exports = router;
