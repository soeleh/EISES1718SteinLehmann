//Node Module einbinden
global.express = require('express'),
global.bodyParser = require('body-parser');
global.mongoose = require('mongoose');
global.http = require('http');

// Node Module initialisieren
global.app = express();
app.use(bodyParser.json());

// Einstellungen
app.set('port', process.env.PORT || 4200);

// App starten
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Der Server läuft auf Port %s', port);
});
