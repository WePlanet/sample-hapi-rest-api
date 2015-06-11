'use strict';

var cryptoHelper = require('../components/crypto-helper');
var models = require('../models');

exports.create = function (server) {
  models.User.bulkCreate([
    {email: '6pack@wepla.net', password: cryptoHelper.md5('123123'), name: 'Chris', role: 'admin'},
    {email: 'ej88ej@gmail.com', password: cryptoHelper.md5('123123'), name: 'Jeonghwan', role: 'user'}
  ]).then(function () {
    models.Thing.bulkCreate([
      {name: 'todo1'},
      {name: 'todo2'}
    ]).then(function () {
      server.log('INFO', 'Seed date was inserted.');
    });
  });
};
