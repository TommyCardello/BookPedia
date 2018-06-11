var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET books page. */
router.get('/books', function(req, res, next) {
  res.render('books', { title: 'Books' });
});

/* GET authors page. */
router.get('/authors', function(req, res, next) {
  res.render('authors', { title: 'Authors' });
});

module.exports = router;
