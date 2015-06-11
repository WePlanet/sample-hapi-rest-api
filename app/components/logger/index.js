'use strict';

var opts = {
  opsInterval: 1000,
  reporters: [{
    reporter: require('good-console'),
    args:[{ request: '*', response: '*', log: '*', error: '*' }]
  },

  // Blow is for file logging.
  //{
  //  reporter: require('good-file'),
  //  args: [{
  //    path: require('../../config/index.js').log.path,
  //    format: 'YYYYMMDD-hhmmss',
  //    prefix: 'access',
  //    extension: 'log',
  //    rotate: 'daily'
  //  }, { request: '*', response: '*', log: '*', error: '*'}]
  //}
  ]
};

module.exports = function(server) {
  server.register({
    register: require('good'),
    options: opts
  }, function (err) {
    if (err) {
      throw err;
    }
  });
};
