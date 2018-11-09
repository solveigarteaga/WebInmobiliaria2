var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user)
  {;
    res.redirect('/admin');
  }
  else{
    res.render('index');
  }
});

router.get('/ventas', function(req, res, next){
  res.render('ventas');
});

router.get('/alquiler', function(req, res, next){
  res.render('alquiler');
});

router.post('/login', function(req, res, next){

  if(req.body.user == "admin" && req.body.pass == "admin123")
  {
    req.session.user = req.body.user;
    res.status(200).json({
      "msg": "OK"
    });
  }
  else
  {
    res.status(401).json({
      "msg": "Usuario o contraseña incorrecta"
    });
  }
});

router.get('/admin', function(req, res, next) {
  if(req.session.user){
    res.render('admin');
  }
  else{
    res.redirect('/');
  }
});

router.get('/admin/client', function(req, res, next) {
  if(req.session.user){
    res.render('client');
  }
  else{
    res.redirect('/');
  }
});

router.get('/logout', function(req, res ,next){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});


module.exports = router;
