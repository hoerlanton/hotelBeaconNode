var express = require('express');
var router = express.Router();
var noble = require('../example/noble');
var bodyParser = require('body-parser');
var cors = require('cors');
var anreiseliste = require('./anreiseListe.js');
var imHausListe = require('./imHausListe.js');
var mongojs = require('mongojs');
var db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', [ 'beaconAnreiseListe', 'beaconImHausListe']);


//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

//Save AnreiseListe
router.post('/anreiseListe', function(req, res, next) {
anreiseliste.saveAnreiseListe(req, res, db)});

//Save ImHausListe
router.post('/imHausListe', function(req, res, next) {
imHausListe.saveImHausListe(req, res, db)});

//Get anreiseListes
router.get('/anreiseListe', function(req, res, next) {
anreiseliste.getAnreiseListe(req, res, db)});

//Get imHausListe
router.get('/imHausListe', function(req, res, next) {
imHausListe.getImHausListe(req, res, db)});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/noble', function(req, res, next) {
    noble.noble(req, res);
});

module.exports = router;