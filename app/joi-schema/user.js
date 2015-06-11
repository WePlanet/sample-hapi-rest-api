'use strict';

var Joi = require('joi');

exports.getSchema = function() {
  return {
    id: Joi.number().integer().min(0),
    role: Joi.number().valid('user', 'admin'),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    name: Joi.string().min(2).max(30)
  };
};
