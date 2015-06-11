"use strict";

var path = require('path');

module.exports = function(grunt) {

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

    concurrent: {
      dev: {
        tasks: ['jshint', 'lab', 'hapi', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
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

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hapi');
  grunt.loadNpmTasks('grunt-lab');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('test', ['jshint', 'lab', 'open:report']);
  grunt.registerTask('server', ['hapi', 'watch']);
  grunt.registerTask('default', ['server']);

};