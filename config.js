module.exports = {
    'port': {
        'http': 5000
    },
    'dependencies': [
        // Libraries managed with Bower.
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js',

        // Third party libraries downloaded manually because they are not managed by Bower.
        './src/js/libs/crypto-js/3.1.2/md5.js'
    ],
    'scripts': [
        './src/js/scripts/app.js',
        './src/js/scripts/**/*.js',
        './src/js/scripts/routes.js',
        './src/js/scripts/location.js'
    ],
    'html': [
        './src/*.html',
        './src/views/*.html'
    ]
};
