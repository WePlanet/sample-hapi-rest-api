'use strict';

var Joi = require('joi');
var User = require('../../joi-schema/user').getSchema();

exports.query = function() {
  return {
    query: {
      limit: Joi.number().integer().default(100),
      skip: Joi.number().integer().default(0)
    }
  };
};

exports.create = function() {
  return {
    payload: {
      role: User.role.default('user'),
      email: User.email.required(),
      password: User.password.required(),
      name: User.name.required()
    }
  };
};

exports.destroy = function() {
  return {
    params: {
      id: User.id.required()
    }
  };
};
