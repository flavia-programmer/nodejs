var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flavia' });
});

/* GET teste page. */
router.get('/teste', function(req, res) {
  res.send('teste')
})

/* GET contato page. */
router.get('/contato', function(req, res) {
  res.send('contato')
})

module.exports = router;
