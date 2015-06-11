'use strict';

var _ = require('lodash');
var dbConfig = require('./config.json')[process.env.NODE_ENV];

// All configurations will extend these options
var all = {
  env: process.env.NODE_ENV,

  // Mysql
  mysql: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: dbConfig.dialect
  },

  // Should we populate the DB with sample data?
  seedDB: true,

};

// Export the config object based on the NODE_ENV
module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});

