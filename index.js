(function () {
    'use strict';

    var config = require('./config');
    var port = config.port;
    var finalhandler = require('finalhandler');
    var http = require('http');
    var serveIndex = require('serve-index');
    var serveStatic = require('serve-static');

    // Serve directory indexes for src folders (with icons).
    var index = serveIndex('src', {'icons': true});

    // Serve up src folder files.
    var serve = serveStatic('src');

    // Create server
    var server = http.createServer(function onRequest (req, res) {
        var done = finalhandler(req, res);
        serve(req, res, function onNext(err) {
            if (err) {
                return done(err);
            }
            index(req, res, done);
        })
    });

    // Listen
    server.listen(port.http, function() {
        console.log('Listening with http on port ' + port.http);
    });
}());
