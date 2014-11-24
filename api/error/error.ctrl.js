/**
 * Error controller
 */

'use strict';

var errors = require('../../components/errors');

var MyError = {};
MyError.get = {
  handler: function(req, reply) {
    errors.reply409('This is error message', reply);
  }
};


module.exports = MyError;