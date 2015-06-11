'use strict';

module.exports = function(server) {
  require('../components/route-helper').route(server, __dirname); // TODO Should enhance route helper

  server.route({
    method: 'GET',
    path: '/',
    handler: function(req, reply) {
      var message = {message: 'This is smaple-hapi-rest-api server'};
      req.log('INFO', message);
      reply(message);
    }
  });
};