var express = require('express');
var router = express.Router();

/* 官网. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Martian效率管理官网' });
});

module.exports = router;
