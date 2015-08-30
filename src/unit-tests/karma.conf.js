module.exports = function (config) {

    var _config = require('../../config');

    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: _config.dependencies
            .concat(_config.scripts)
            .concat([
                // Unit tests.
                './src/unit-tests/spec/*Spec.js'
            ]),
        exclude: [
            './src/unit-tests/spec/*_Exclude/*.js',
            './src/js/libs/**/*.js'
        ],
        browsers: ['PhantomJS'],
        autoWatch: true,
        preprocessors: { './src/js/**/*.js': ['coverage'] },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: './src/unit-tests/coverage/'
        }
    });
};
