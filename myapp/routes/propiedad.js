var express = require('express');
var router = express.Router();
const conn = require('../database/db');

router.post('/newPropiedad', function(req, res){
	conn.db.query("INSERT INTO propiedad (titulo, ubicacion, pais, tipo, area, precio, moneda, bano, habitaciones, url_imagen, status, ciudad)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.titulo, req.body.ubicacion, req.body.pais, req.body.tipo, req.body.area, req.body.precio, req.body.moneda, req.body.bano, req.body.habitaciones, req.body.url_imagen, req.body.status, req.body.ciudad], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.get('/getPropiedades', function(req, res){
	conn.db.query("SELECT * FROM propiedad WHERE status in ('En venta', 'En alquiler')", function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.get('/getPropiedadesAdmin', function(req, res){
	conn.db.query("SELECT * FROM propiedad", function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.get('/getPropiedadesById', function(req, res){
	conn.db.query("SELECT * FROM propiedad WHERE id=?", [req.query.id], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.get('/getPropiedadesByTipo', function(req,res)
{
	conn.db.query("SELECT * FROM propiedad WHERE tipo=?", [req.query.tipo], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.get('/getPropiedadesByStatus', function(req,res)
{
	conn.db.query("SELECT * FROM propiedad WHERE status=?", [req.query.status], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.put('/modPropiedad', function(req, res){
	conn.db.query("UPDATE propiedad SET status=? WHERE id = ?", [req.body.status, req.body.id], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});

router.delete('/delPropiedad', function(req, res){
	console.log(req.body);
	conn.db.query("DELETE FROM propiedad WHERE id=?", [req.body.id], function(err, rows){
		res.status(200).json({
		status: 200,
		data: rows
		})
	})
});
module.exports = router;
