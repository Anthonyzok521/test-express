var express = require('express');
var router = express.Router();

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', clave: process.env.KEY});
});

router.get('/contacts', (req, res)=> {
  res.render('contacts');
})

router.get('/credits', (req, res)=> {
  res.render('credits');
})

module.exports = router;
