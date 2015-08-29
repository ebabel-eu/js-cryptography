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
                    './build/js/dependencies.js' : [
                        './bower_components/angular/angular.js'
                    ],
                    
                    // All custom scripts written for this website.
                    './build/js/default.js': [
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
                    './build/js/scripts.min.js': ['./build/js/scripts.js']
                }
            },
            dependencies: {
                files: {
                    './build/js/dependencies.min.js': ['./build/js/dependencies.js']
                }
            }
        },

        scsslint: {
            allFiles: [
                './src/sass/default.scss',
                './src/sass/**/*.scss'
            ],
            options: {
                config: './lint/scss-lint.yml',
                colorizeOutput: true
            },
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                    'sourcemap=none': ''
                },
                files: {
                    './build/css/default.css': './src/sass/default.scss'
                }
            }
        },

        pleeease: {
            custom: {
                options: {
                    autoprefixer: {
                        'browsers': ['last 4 versions']
                    },
                    minifier: false
                },
                files: {
                    './build/css/default.css': './build/css/default.css'
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
                    cwd: './build/css',
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
            sass: {
                files: [
                    './lint/scss-lint.yml',
                    './src/css/**/*.scss'
                ],
                tasks: [
                    'scsslint',
                    'sass',
                    'pleeease',
                    'copy'
                ]
            },
            scripts: {
                files: [
                    './lint/es-lint.json',
                    './src/js/scripts/*.js',
                    './src/js/scripts/**/*.js'
                ],
                tasks: [
                    'eslint',
                    'concat',
                    'copy'
                ]
            },
            html: {
                files: [
                    'src/index.html'
                ],
                tasks: [
                    'htmlangular',
                    'copy'
                ]
            },
            grunt: {
                files: [
                    './Gruntfile.js'
                ],
                tasks: [
                    'eslint',
                    'concat',
                    'scsslint',
                    'sass',
                    'pleeease',
                    'htmlangular',
                    'copy'
                ]
            }
        }
        
    });

    // During development, continuous building for both css and javascript: run 'grunt watch' command (see watch above).
    // Warning: this watch does not include minification.
    
    // Prior to release. One-off build for both css and javascript, including minification: run 'grunt' command.
    // There is no linting in this version, since linting is meant to happen during development.
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'sass',
        'pleeease',
        'cssmin',
        'copy'
    ]);

    grunt.registerTask('wercker', [
        'eslint',
        'htmlangular'
    ]);
};
