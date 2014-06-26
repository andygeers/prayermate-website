'use strict';
module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt, {
		"sass" : "grunt-sass",
		"autoprefixer" : "grunt-autoprefixer",
		"cssmin" : "grunt-contrib-cssmin",
		"jshint" : "grunt-contrib-jshint",
		"uglify" : "grunt-contrib-uglify",
		"imagemin" : "grunt-contrib-imagemin",
		"watch" : "grunt-contrib-watch",
		"newer" : "grunt-newer",
		"notify" : "grunt-notify"
	});


    grunt.initConfig({

        // sass
        sass: {
            dist: {
            	options: {
	                outputStyle: 'compressed'
                },
                files: {
                    'assets/styles/build/style.css': 'assets/styles/source/style.scss'
                }
            }
        },

        // autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4']
            },
            files: {
                expand: true,
                flatten: true,
                src: 'assets/styles/build/*.css',
                dest: 'assets/styles/build'
            },
        },

        // css minify
        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            minify: {
                expand: true,
                cwd: 'assets/styles/build',
                src: ['*.css', '!*.min.css'],
                ext: '.css'
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'assets/js/source/**/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            plugins: {
                options: {
                    sourceMap: 'assets/js/plugins.js.map',
                    sourceMappingURL: 'plugins.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'assets/js/plugins.min.js': [
                        'assets/js/source/plugins.js',
                        'assets/js/vendor/navigation.js',
                        'assets/js/vendor/skip-link-focus-fix.js',
                        'assets/js/vendor/flexslider.js',
                    ]
                }
            },
            main: {
                options: {
                    sourceMap: 'assets/js/main.js.map',
                    sourceMappingURL: 'main.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'assets/js/main.min.js': [
                        'assets/js/source/main.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/images/'
                }]
            }
        },

         // watch for changes and trigger sass, jshint, uglify and livereload
        watch: {
            sass: {
                files: ['assets/styles/source/**/*.{scss,sass}'],
                tasks: ['sass', 'newer:autoprefixer', 'newer:cssmin']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['newer:jshint', 'newer:uglify']
            }
        }

    });

    // register task
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify', 'watch']);

};