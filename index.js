(function () {
    'use strict';

    var http = require('http');
    var express = require('express');
    var app = express();
    var port = {
        http: 5000
    };

    app.set('port', (process.env.PORT || port.http));
    port.http = app.get('port');

    // Simple logger.
    app.use(function (req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });

    // Set generic headers used in all responses.
    app.use(function (req, res, next) {
        res.set({
            'X-Powered-By': 'NodeJS',
            'Access-Control-Allow-Methods': 'GET, POST',                        // Allowed request http verbs.
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',    // Allowed request headers.
            'Cache-Control': 'public, max-age=345600',                          // 4 days
            'Expires': new Date(Date.now() + 345600000).toUTCString()
        });
        next();
    });

    // Handle all static file GET requests.
    app.use(express.static(__dirname + '/src'));

    http.createServer(app.handle.bind(app))
        .listen(port.http, function() {
            console.log('Listening with http on port ' + port.http);
        });

}());
