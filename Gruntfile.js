"use strict";

var path = require('path');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint : { //docs: http://www.jshint.com/docs/options/
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['app/**/*.js', '!**/*.spec.js', 'Gruntfile.js']
    },

    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['jshint', 'hapi'],
        options: {
          livereload: {
            port: 35730
          },
          spawn: false
        }
      }
    },

    hapi: {
      custom_options: {
        options: {
          server: path.resolve('./app/app.js')
        }
      }
    },

    concurrent: {
      dev: {
        tasks: ['jshint', 'lab', 'hapi', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    lab: {
      files: ['app/**/*.spec.js'],
      nodeEnv: 'development',
      DEBUG: '*',
      color: true,
      verbose: true,
      timeout: 7000,
      parallel: false,
      reportFile: 'report.html',
      reporter: 'html',
      coverage: true
    },

    open: {
      dev: {
        path: 'http://localhost:9000',
        app: 'Google Chrome'
      },
      report: {
        path: 'report.html',
        app: 'Google Chrome'
      }
    }

  }); // initConfig


  grunt.registerTask('test', ['jshint', 'lab', 'open:report']);
  grunt.registerTask('server', ['hapi', 'watch']);
  grunt.registerTask('default', ['server']);

};