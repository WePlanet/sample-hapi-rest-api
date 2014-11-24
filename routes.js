/**
 * Routing
 */

'use strict';

module.exports = function(server) {

  require('./api/ping')(server);

};