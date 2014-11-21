/**
 * /error
 */

'use strict';

var error = require('./error.ctrl.js');

module.exports = function(server) {

  server.route({
    method: 'GET',
    path: '/error',
    handler: error.get.handler
  });

};