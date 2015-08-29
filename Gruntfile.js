// Build the front-end source to run locally.
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        eslint: {
            options: {
                configFile: './src/lint/es-lint.json'    // Default rules: http://eslint.org/docs/rules/
            },
            target: [
                './src/js/scripts/*.js',
                './src/js/scripts/**/*.js'
            ]
        },

        concat: {
            options: {
                separator: ';',
                banner: '/* This file is generated with Grunt and should not be edited directly. */\n'
            },
            js: {
                files: {
                    // Third party javascript dependencies used in this website.
                    './src/js/dependencies.js' : [
                        './bower_components/angular/angular.js'
                    ],
                    
                    // All custom scripts written for this website.
                    './src/js/scripts.js': [
                        './src/js/scripts/*.js',
                        './src/js/scripts/**/*.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                compress: {
                    drop_console: true
                }
            },
            scripts: {
                files: {
                    './build/js/scripts.min.js': [
                        './src/js/scripts.js'
                    ]
                }
            },
            dependencies: {
                files: {
                    './build/js/dependencies.min.js': [
                        './src/js/dependencies.js'
                    ]
                }
            }
        },

        htmlangular: {
            options: {
                reportpath: 'lint/html-angular-validate-report.json'
            },
            files: {
                src: [
                    './src/*.html'
                ]
            }
        },

        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: [{
                    expand: true,
                    cwd: './src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './build/css',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            html: {
                nonull: true,
                src: [
                    'src/index.html',
                ], 
                dest: 'build/index.html',
                options: {
                    process: function (content, srcpath) {
                        return content
                            .replace(/\.css/g,'.min.css')
                            .replace(/\.js/g, '.min.js')
                            .replace(/\[DEV\]\s/, '')
                            .replace(/analytics.min.js/g, 'analytics.js');
                    },
                }
            },
            main: {
                files: [
                    {
                        nonull: true,
                        expand: true, 
                        flatten: true, 
                        src: [
                            'src/robots.txt',
                            'src/favicon.ico'
                        ], 
                        dest: 'build/',
                        filter: 'isFile'
                    },
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['src/img/**'], 
                        dest: 'build/img/', 
                        filter: 'isFile'
                    }
                ],
            },
        },

        // Re-run these automated tasks each time certain files are modified.
        // These tasks are meant for development and include linting.
        watch: {
            scripts: {
                files: [
                    './src/lint/es-lint.json',
                    './src/js/scripts/*.js',
                    './src/js/scripts/**/*.js'
                ],
                tasks: [
                    'eslint',
                    'concat'
                ]
            },
            html: {
                files: [
                    'src/index.html'
                ],
                tasks: [
                    'htmlangular'
                ]
            },
            grunt: {
                files: [
                    './Gruntfile.js'
                ],
                tasks: [
                    'eslint',
                    'concat',
                    'htmlangular'
                ]
            }
        }
        
    });
    
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'cssmin',
        'copy'
    ]);
};
