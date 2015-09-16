module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/*.js', 'test/testem.tap'],
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },
        'serve': {
            path: './app',
            options: {
                port: 3000
            }

        },

        jshint: {
            jshintrc: true
        },
        watch: {
            html : {
              files :'<%= config.app %>/**/*.html' ,
                options: {
                    livereload: 3000,
                }
            },
            css: {
                files: '<%= config.app %>/**/*.css',
                options: {
                    livereload: 3000,
                }
            },
            scripts: {
                files: ['<%= config.app %>/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                }
            },
            configFiles: {
                files: ['Gruntfile.js', 'config/*.js'],
                options: {
                    reload: true
                }
            },
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }

            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*'
                ]
            }
        },
        wiredep: {
            task: {
                src: ['<%= config.app %>/index.html']
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            },
        },
        open: {
            all: {
                path: 'http://localhost:9000/index.html'
            }
        }

    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'connect:livereload',
            'watch',
            'wiredep',
            'open'
        ]);
    });
};