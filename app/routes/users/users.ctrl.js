'use strict';

var User = require('../../models').User;

exports.query = function (req, reply) {
  User.findAll({
    limit: req.limit,
    skip: req.skip
  }).then(function (users) {
    reply(users);
  }).catch(function (err) {
    reply(err).code(500);
  });
};

exports.create = function (req, reply) {
  User.create(req.payload).then(function (data) {
    reply(data).code(201);
  }).catch(function (err) {
    reply(err).code(500)
  });
};

exports.destroy = function (req, reply) {
  User.destroy({
    where: {id: req.params.id}
  }).then(function (affectedRows) {
    if (affectedRows) {
      reply().code(204);
    } else {
      reply().code(404);
    }
  }).catch(function (err) {
    reply(err).code(500);
  });
};