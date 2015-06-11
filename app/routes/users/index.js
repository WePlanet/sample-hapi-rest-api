'use strict';

var ctrl = require('./users.ctrl.js');
var valid = require('./users.valid.js');

module.exports = function(server) {
  require('../../components/route-helper').route(server, __dirname);

  server.route({
    method: 'GET',
    path: '/users',
    handler: ctrl.query,
    config: { validate: valid.query() }
  });

  server.route({
    method: 'POST',
    path: '/users',
    handler: ctrl.create,
    config: { validate: valid.create() }
  });

  server.route({
    method: 'DELETE',
    path: '/users/{id}',
    handler: ctrl.destroy,
    config: { validate: valid.destroy() }
  });
};