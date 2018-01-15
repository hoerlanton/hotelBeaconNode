var express = require('express');
var router = express.Router();
var noble = require('../example/noble');
var bodyParser = require('body-parser');
var cors = require('cors');


//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/noble', function(req, res, next) {
    noble.noble(req, res);
});

module.exports = router;