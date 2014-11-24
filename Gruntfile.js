"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: { //docs: http://www.jshint.com/docs/options/
      src: ['**/*.js', '!node_modules/**/*.js', '!**/*.spec.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['**/*.js', '!node_modules/**/*.js'],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },

    nodemon: {
      dev: {
        script: 'app.js'
      }
    },

    concurrent: {
      dev: {
        tasks: ['jshint', 'nodemon:dev', 'mochaTest:test', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'min',
          should: require('should')
        },
        src: ['**/*.spec.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['concurrent:dev']);


};