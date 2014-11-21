var Hapi = require('hapi');
var server = new Hapi.Server('localhost', 9000);

// Routing
require('./routes')(server);

// Logger
require('./components/logger')(server);

server.start(function() {
  console.log('info', 'Server is running at ' + server.info.uri);
});