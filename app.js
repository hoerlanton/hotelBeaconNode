'use strict';

const   bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    multer = require('multer'),
    routes = require('./routes/index'),
    path = require('path'),
    request = require('request'),
    http = require('http'),
    fs = require("fs"),
    config = require('config');

const csv=require('csvtojson');

//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false}));

//Throws errors if callbacks are not from facebook
//{ verify: verifyRequestSignature } deleted from function because it throws errors if JSON.parse function is called
app.use(bodyParser.json());

//Setting port
app.set('port', process.env.PORT || 8000);

//Set Public folder as static folder
app.use(express.static('public'));

// le dice a express que el directorio 'uploads', es estatico.
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

//Use ./routes/index.js as routes root /
app.use('/', routes);

// HOST_URL used for DB calls - SERVER_URL without https or https://
const HOST_URL = config.get('hostURL');

//Store uploaded files - destination set / name of file set
let storage = multer.diskStorage({
    // Destination of upload
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    // Rename of file
    filename: function (req, file, cb) {
        cb(null, Math.random() + "*" + file.originalname.replace(/ /g, ""));
    }
});

let upload = multer({ storage: storage });
let csvDatei = "";

//source: https://gist.github.com/aitoribanez/8b2d38601f6916139f5754aae5bcc15f
//New file got attached to message
app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log("console log in app.post upload", 'files', req.files);
    res.send(req.files);
    console.log("req.files:");
    console.log(req.files);

    let uploadedFileName = req.files[0].filename.replace(/ /g, "");

    let data = '';
    let csvRow = '';
    let json = [];

    var readStream = fs.createReadStream(String("./uploads/" + uploadedFileName), 'binary');

    readStream.on('data', function(chunk) {
        String(data += chunk);

    }).on('end', function() {
        console.log(typeof data);
        csv({noheader:true})
            .fromString(data)
            .on('csv',(csvRow)=>{ // this func will be called 3 times
                //console.log(csvRow);// => [1,2,3] , [4,5,6]  , [7,8,9]
                json.push(csvRow);
            })
            .on('done', (error)=>{

                csvDatei = JSON.stringify(json);
                console.log('csvDatei: ');
                //console.log(csvDatei);
                if (csvDatei.indexOf("Im Haus") !== -1) {
                    postImHausListeToDB();
                } else if (csvDatei.indexOf("Anreisen") !== -1) {
                    postAnreiseListeToDB();
                } else if (csvDatei.indexOf("Trace Report") !== -1){
                    postTracesListeToDB();
                }
                console.log('end')
            });


        //New User is saved in DB, function called in receivedAuthentication - send to index.js /guests REST-FUL API
        function postImHausListeToDB() {
            // An object of options to indicate where to post to
            let post_options = {
                //Change URL to hotelmessengertagbag.herokuapp.com if deploying
                host: HOST_URL,
                port: '80',
                path: '/imHausListe',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // Set up the request
            let post_req = http.request(post_options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('Response: ' + "chunk as string");
                });
            });

            // post the data
            post_req.write(csvDatei);
            post_req.end();
        }
        function postAnreiseListeToDB() {
            // An object of options to indicate where to post to
            let post_options = {
                //Change URL to hotelmessengertagbag.herokuapp.com if deploying
                host: HOST_URL,
                port: '80',
                path: '/anreiseListe',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // Set up the request
            let post_req = http.request(post_options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('Response: ' + "chunk as string");
                });
            });
            // post the data
            post_req.write(csvDatei);
            post_req.end();
        }
        function postTracesListeToDB () {
            // An object of options to indicate where to post to
            let post_options = {
                //Change URL to hotelmessengertagbag.herokuapp.com if deploying
                host: HOST_URL,
                port: '80',
                path: '/tracesListe',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // Set up the request
            let post_req = http.request(post_options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('Response: ' + "chunk as string");
                });
            });
            // post the data
            post_req.write(csvDatei);
            post_req.end();
        }
    });
});

/*
 * Start server
 * Webhooks must be available via SSL with a certificate signed by a valid
 * certificate authority.
 */
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;