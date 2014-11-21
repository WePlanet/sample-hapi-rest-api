/**
 * Error controller
 */

'use strict';

var errors = require('../../components/errors');

var Error = {};
Error.get = {
  handler: function(req, reply) {
    errors.reply409('This is error message', reply);
  }
};


module.exports = Error;