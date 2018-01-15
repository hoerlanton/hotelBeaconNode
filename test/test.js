var test = require('tap').test;
var MiniBeacon = require('..');
var MiniBeacon1 = require('minew-minibeacon');

test('MiniBeacon.is', function(t) {
  t.ok(MiniBeacon.is({
    advertisement: {
      localName: 'minibeacon'
    }
  }), 'Should accept `minibeacon` localName');

  t.ok(MiniBeacon.is({
    advertisement: {
      localName: 'MiniBeacon_0666'
    }
  }), 'Should accept `MiniBeacon_0666` localName');

  t.notOk(MiniBeacon.is({
    advertisement: {
      localName: 'BigMiniBeacon_0666'
    }
  }), 'Should not accept `BigMiniBeacon_0666` localName');

  t.end();



});

MiniBeacon1.discover(function(device) {
    device.connectAndSetup(function(err) {
        if (err) {
            return console.log('Failed to connect=', err.message);
        }
        console.log('Device is connected');
    });
})



