/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveAnreiseListe: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("Post request made to /anreiseListe");


        let anreiseListeData = {
            data: "",
        };

        let anreiseListe = [];

        anreiseListeData.data = req.body;

        console.log(anreiseListeData.data);
        //console.log(imHausListe[0].name);
        //console.log(imHausListe[1]);

        for (let i = 0; i < anreiseListeData.data.length; i++) {
            console.log(i);
            console.log(anreiseListeData.data[i][22]);

            anreiseListe.push({
                "name": anreiseListeData.data[i][20],
                "zimmernummer": anreiseListeData.data[i][22],
                "anreise": anreiseListeData.data[i][11],
                "abreise": anreiseListeData.data[i][24],
                "personenAnzahl": anreiseListeData.data[i][25],
                "notiz2": anreiseListeData.data[i][27]
            });
        };

        console.log(anreiseListe);

        db.beaconAnreiseListe.remove({});

        setTimeout(function() {
            db.beaconAnreiseListe.save(anreiseListe, function(err, anreiseListe) {
                if (err) {
                    res.send(err);
                }
                res.json(anreiseListe);
                console.log(anreiseListe);
                console.log("anreiseListe save called");
            });
        }, 100);
    },

    updateAnreiseListe: function (req, res, db) {

        console.log("Post request made to /updateAnreiseListeElement");

        let informationElements = req.body;


        let nameValue = informationElements[0].substring(1, informationElements[0].length);
        let zimmernummerValue = informationElements[1].substring(1, informationElements[1].length);

        console.log(nameValue);
        console.log(zimmernummerValue);


        db.beaconAnreiseListe.update(
            {name: nameValue,
                "zimmernummer": zimmernummerValue},
            {$set: {
                "bgColor": "0a7a74",
            }}, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });


        setTimeout(function() {
            db.beaconAnreiseListe.findOne(
                {name: nameValue,
                    "zimmernummer": zimmernummerValue},
                function (err, beaconAnreiseListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(beaconAnreiseListe);
                    console.log('beaconAnreiseListe');
                    console.log(JSON.stringify(beaconAnreiseListe));
                });
        }, 700);
    },
    getAnreiseListe: function (req, res, db) {

        console.log("anreiseListe get called");
//Get guests from Mongo DB
        db.beaconAnreiseListe.find(function (err, anreiseListe) {
            if (err) {
                res.send(err);
            }
            res.json(anreiseListe);
        });
    }
};
