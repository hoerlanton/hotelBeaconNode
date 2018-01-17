/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveImHausListe: function (req, res, db) {

//JSON string is parsed to a JSON object
        console.log("Post request made to /imHausListe");

        let imHausListeData = {
            data: "",
        };

        let imHausListe = [];

        imHausListeData.data = req.body;

//console.log(imHausListeData.data);
//console.log(imHausListe[0].name);
//console.log(imHausListe[1]);

        for (let i = 0; i < imHausListeData.data.length; i++) {
            console.log(i);
            console.log(imHausListeData.data[i][22]);

            imHausListe.push({
                "name": imHausListeData.data[i][22],
                "zimmernummer": imHausListeData.data[i][23],
                "anreise": imHausListeData.data[i][25],
                "abreise": imHausListeData.data[i][26],
                "personenAnzahl": imHausListeData.data[i][27],
                "notiz1": imHausListeData.data[i][37],
                "notiz2": imHausListeData.data[i][39],
                "bemerkung": imHausListeData.data[i][54]
            });
        }
        ;

        console.log(imHausListe);

//console.log('req.body' + req.body);
//console.log('imHausListe' +  imHausListe);
//imHausListe.data = req.body;

        db.beaconImHausListe.remove({});
        setTimeout(function () {
            db.beaconImHausListe.save(imHausListe, function (err, imHausListe) {
                if (err) {
                    res.send(err);
                }
                res.json(imHausListe);
                console.log("imHausListe save called");
            });
        }, 500);
    },
    updateImHausListe: function (req, res, db) {

        console.log("Post request made to /updateImHausListeElement");

        let informationElements = req.body;


        let nameValue = informationElements[0].substring(1, informationElements[0].length);
        let zimmernummerValue = informationElements[1].substring(1, informationElements[1].length);

        console.log(nameValue);
        console.log(zimmernummerValue);


        db.beaconImHausListe.update(
            {
                name: nameValue,
                "zimmernummer": zimmernummerValue
            },
            {
                $set: {
                    "bgColor": "0a7a74",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });


        setTimeout(function () {
            db.beaconImHausListe.findOne(
                {
                    name: nameValue,
                    "zimmernummer": zimmernummerValue
                },
                function (err, beaconImHausListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(beaconImHausListe);
                    console.log('beaconImHausListe');
                    console.log(JSON.stringify(beaconImHausListe));
                });
        }, 700);
    },
    getImHausListe: function (req, res, db) {
        console.log("imHausListe get called");
//Get guests from Mongo DB
        db.beaconImHausListe.find(function (err, imHausListe) {
            if (err) {
                res.send(err);
            }
            res.json(imHausListe);
        });
    }
};