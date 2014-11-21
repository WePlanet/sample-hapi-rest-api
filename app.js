var Hapi = require('hapi');
var server = new Hapi.Server('localhost', 9000);

// Routing
require('./routes')(server);

// Logging
//require('./logger')(server);

server.start(function() {
  console.log('info', 'Server is running at ' + server.info.uri);
});

console.log(require('./config/env'));