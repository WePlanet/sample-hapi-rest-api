/**
 * /ping
 */

'use strict';

var ping = require('./ping.ctrl.js');

module.exports = function(server) {

  server.route({
    method: 'GET',
    path: '/ping/{name}',
    handler: ping.get.handler,
    config: {
      validate: ping.get.validate
    }
  });

  server.route({
    method: 'POST',
    path: '/ping',
    handler: ping.post.handler,
    config: {
      validate: ping.post.validate
    }
  });

  server.route({
    method: 'PUT',
    path: '/ping',
    handler: ping.put.handler,
    config: {
      validate: ping.put.validate
    }
  });

  server.route({
    method: 'DELETE',
    path: '/ping',
    handler: ping.delete.handler
  });

};