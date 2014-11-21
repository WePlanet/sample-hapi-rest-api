'use strict';

var Errors = {};

Errors.reply400 = function(message, reply) {
  replyError(400, 'Bad Request', message, reply);
};

Errors.reply401 = function(message, reply) {
  replyError(401, 'Unauthorized', message, reply);
};

Errors.reply402 = function(message, reply) {
  replyError(402, 'Payment Required', message, reply);
};

Errors.reply403 = function(message, reply) {
  replyError(403, 'Forbidden', message, reply);
};

Errors.reply404 = function(message, reply) {
  replyError(404, 'Not Found', message, reply);
};

Errors.reply405 = function(message, reply) {
  replyError(405, 'Method Not Allowed', message, reply);
};

Errors.reply406 = function(message, reply) {
  replyError(406, 'Not Acceptable', message, reply);
};

Errors.reply407 = function(message, reply) {
  replyError(407, 'Proxy Authentication Required', message, reply);
};

Errors.reply408 = function(message, reply) {
  replyError(408, 'Request Timeout', message, reply);
};

Errors.reply409 = function(message, reply) {
  replyError(409, 'Conflict', message, reply);
};

/**
 * More error code can be here...
 */


function replyError(errorCode, error, message, reply) {
  reply({
    statusCode: errorCode,
    error: error,
    message: message
  }).code(errorCode);
}

module.exports = Errors;

