/**
 * Created by antonhorl on 15.01.18.
 */
var noble = require('noble');

let name = [];
let nameString = "";

module.exports = {
    noble: function (req, res, next) {

        let AUTHORIZATION_UUID = 'fff6';
        let EXPECTED_MANUFACTURER_DATA_LENGTH = 25;
        let APPLE_COMPANY_IDENTIFIER = 0x004c; // https://www.bluetooth.org/en-us/specification/assigned-numbers/company-identifiers
        let IBEACON_TYPE = 0x02;
        let EXPECTED_IBEACON_DATA_LENGTH = 0x15;
        let manufacturerData = "";


        noble.on('stateChange', function (state) {
            if (state === 'poweredOn') {
                noble.startScanning();
            } else {
                noble.stopScanning();
            }
        });

        noble.on('discover', function (peripheral) {
            console.log(peripheral);
            console.log('peripheral discovered (' + peripheral.id +
                ' with address <' + peripheral.address + ', ' + peripheral.addressType + '>,' +
                ' connectable ' + peripheral.connectable + ',' +
                ' RSSI ' + peripheral.rssi + ':');
            console.log('\thello my local name is:');
            console.log('\t\t' + peripheral.advertisement.localName);
            console.log('\tcan I interest you in any of the following advertised services:');
            console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));
            if (peripheral.advertisement.localName) {
                console.log(typeof peripheral.advertisement.localName);
                console.log('------------------------------------------->' + peripheral.advertisement.localName);
                //let nameString = peripheral.advertisement.localName;
                //if (name.indexOf(JSON.stringify(el.substring(1, 4)) === -1)) {
                    name.push(JSON.stringify(peripheral.advertisement.localName).substring(1, 4));
                    console.log('---------------------++++++++++++++++---------------------->' + name);
                }


            //}
            let serviceData = peripheral.advertisement.serviceData;
            if (serviceData && serviceData.length) {
                //console.log('\there is my service data:');
                for (let i in serviceData) {
                    //console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
                }
            }
            if (peripheral.advertisement.manufacturerData) {
                //console.log('\there is my manufacturer data:');
                //console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));


                manufacturerData = peripheral.advertisement.manufacturerData;
                let rssi = peripheral.rssi;

                if (manufacturerData &&
                    EXPECTED_MANUFACTURER_DATA_LENGTH <= manufacturerData.length &&
                    APPLE_COMPANY_IDENTIFIER === manufacturerData.readUInt16LE(0) &&
                    IBEACON_TYPE === manufacturerData.readUInt8(2) &&
                    EXPECTED_IBEACON_DATA_LENGTH === manufacturerData.readUInt8(3)) {

                    let uuid = manufacturerData.slice(4, 20).toString('hex');
                    let major = manufacturerData.readUInt16BE(20);
                    let minor = manufacturerData.readUInt16BE(22);
                    let measuredPower = manufacturerData.readInt8(24);

                    let accuracy = Math.pow(12.0, 1.5 * ((rssi / measuredPower) - 1));
                    let proximity = null;

                    if (accuracy < 0) {
                        proximity = 'unknown';
                    } else if (accuracy < 0.5) {
                        proximity = 'immediate';
                    } else if (accuracy < 4.0) {
                        proximity = 'near';
                    } else {
                        proximity = 'far';
                    }

                    this.proximity = proximity;
                    this.accuracy = accuracy;

                    //console.log('got device=%s with distance of %sm', peripheral.uuid, accuracy);
                }
            }
            if (peripheral.advertisement.txPowerLevel !== undefined) {
                //console.log('\tmy TX power level is:');
                //console.log('\t\t' + peripheral.advertisement.txPowerLevel);
            }
        });

        setTimeout(function () {
            console.log("Response sent!!!");
           res.json(name);
        }, 500);
    }
};