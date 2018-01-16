/**
 * Created by antonhorl on 15.01.18.
 */
var noble = require('noble');

module.exports = {
    noble: function (req, res, next) {

        var AUTHORIZATION_UUID = 'fff6';
        var EXPECTED_MANUFACTURER_DATA_LENGTH = 25;
        var APPLE_COMPANY_IDENTIFIER = 0x004c; // https://www.bluetooth.org/en-us/specification/assigned-numbers/company-identifiers
        var IBEACON_TYPE = 0x02;
        var EXPECTED_IBEACON_DATA_LENGTH = 0x15;
        var manufacturerData = "";
        var name = [];

        noble.on('stateChange', function (state) {
            if (state === 'poweredOn') {
                noble.startScanning();
            } else {
                noble.stopScanning();
            }
        });

        noble.on('discover', function (peripheral) {


            console.log('peripheral discovered (' + peripheral.id +
                ' with address <' + peripheral.address + ', ' + peripheral.addressType + '>,' +
                ' connectable ' + peripheral.connectable + ',' +
                ' RSSI ' + peripheral.rssi + ':');
            console.log('\thello my local name is:');
            console.log('\t\t' + peripheral.advertisement.localName);
            console.log('\tcan I interest you in any of the following advertised services:');
            console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));
            name.push(peripheral.advertisement.localName);
            var serviceData = peripheral.advertisement.serviceData;
            if (serviceData && serviceData.length) {
                console.log('\there is my service data:');
                for (var i in serviceData) {
                    console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
                }
            }
            if (peripheral.advertisement.manufacturerData) {
                console.log('\there is my manufacturer data:');
                console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));


                manufacturerData = peripheral.advertisement.manufacturerData;
                var rssi = peripheral.rssi;

                if (manufacturerData &&
                    EXPECTED_MANUFACTURER_DATA_LENGTH <= manufacturerData.length &&
                    APPLE_COMPANY_IDENTIFIER === manufacturerData.readUInt16LE(0) &&
                    IBEACON_TYPE === manufacturerData.readUInt8(2) &&
                    EXPECTED_IBEACON_DATA_LENGTH === manufacturerData.readUInt8(3)) {

                    var uuid = manufacturerData.slice(4, 20).toString('hex');
                    var major = manufacturerData.readUInt16BE(20);
                    var minor = manufacturerData.readUInt16BE(22);
                    var measuredPower = manufacturerData.readInt8(24);

                    var accuracy = Math.pow(12.0, 1.5 * ((rssi / measuredPower) - 1));
                    var proximity = null;

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

                    console.log('got device=%s with distance of %sm', peripheral.uuid, accuracy);

                }

            }
            if (peripheral.advertisement.txPowerLevel !== undefined) {
                console.log('\tmy TX power level is:');
                console.log('\t\t' + peripheral.advertisement.txPowerLevel);
            }
        });
        setTimeout(function () {
            res.json(name);
        }, 20000);
    }
};