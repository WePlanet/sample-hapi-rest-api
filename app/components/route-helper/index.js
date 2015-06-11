'use strict';

var fs = require('fs');
var path = require('path');

/**
 * Pass server object for sub folers routing
 * 하위 폴더 라우팅을 위해 서버 객체를 전달한다.
 * @param {Object} server Hapi object
 * @param {String} _path
 */
exports.route = function(server, _path) {
  if (!server || !_path) throw Error();

  fs.readdirSync(_path).forEach(function (dir) {

    // Ignore files. Only folders
    if (/.js/.test(dir)) return;

    require(path.resolve(_path,  dir))(server);
  });
};