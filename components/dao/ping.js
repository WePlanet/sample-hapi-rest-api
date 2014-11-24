//'use strict';
//
//var db = require('./db');
//
//module.exports = {
//  findByID: function findByID(params, callback) {
//
//    var values = [
//      params.taskId,
//      params.userId
//    ];
//
//    var sql = "select taskId, description from task" +
//      " where taskId = ?" +
//      " and userId = ?";
//
//    db.query({
//      sql: sql,
//      values: values,
//      callback: callback
//    });
//  }
//
//};