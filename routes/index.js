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

module.exports = router;
