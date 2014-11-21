/**
 * Ping controller
 */

'use strict';

var Joi = require('joi');
var Ping = {};

Ping.get = {
  handler: function(req, reply) {
    reply({key: 'GET /ping'});
  },
  validate: {
    params: {
      name: Joi.string().min(3).max(5)
    }
  }
};

Ping.post = {
  handler: function(req, reply) {
    reply({key: 'POST /ping'});
  },
  validate: {
    payload: {
      name: Joi.string().min(3).max(5)
    }
  }
};

Ping.put = {
  handler: function(req, reply) {
    reply({key: 'PUT /ping'});
  },
  validate: {
    query: {
      name: Joi.string().min(3).max(5).required()
    }
  }
};

Ping.delete= {
  handler: function(req, reply) {
    reply({key: 'DELETE /ping'});
  }
};

module.exports = Ping;