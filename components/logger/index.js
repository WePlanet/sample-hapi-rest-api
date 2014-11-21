'use strict'

var good = require('good');
var config = require('../../config/env');
var opts = {
  opsInterval: 1000,
  reporters: [{
    reporter: require('good-console'),
    args:[{ request: '*', log: '*', error: '*', ops: '*'}]
  }, {
    reporter: require('good-file'),
    args: [config.log.path + '/access-log', { request: '*', log: '*'}]
  }, {
    reporter: require('good-file'),
    args: [config.log.path +'/error-log', { error: '*' }]
  }
  ]
}

module.exports = function(server) {
  server.pack.register({
    plugin: good,
    options: opts
  }, function (err) {
    if (err) {
      throw err;
    }
  });
};