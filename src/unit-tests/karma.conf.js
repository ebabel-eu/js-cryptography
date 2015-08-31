module.exports = function (config) {

    var _config = require('../../config');

    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: _config.dependencies
            .concat(_config.scripts)
            .concat([
                // Angular Mocks, library only used by unit tests.
                './bower_components/angular-mocks/angular-mocks.js',

                // Unit tests.
                './src/unit-tests/spec/**/*Spec.js'
            ]),
        exclude: [
            './src/unit-tests/spec/*_Exclude/*.js'
        ],
        browsers: ['PhantomJS'],
        autoWatch: true,
        preprocessors: { './src/js/scripts/**/*.js': ['coverage'] },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: './src/unit-tests/coverage/'
        }
    });
};
