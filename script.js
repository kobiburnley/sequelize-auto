
var SQ = require('./lib');
//var SQ = require('sequelize');
//console.log('SQ', SQ);

var DB_NAME = '',
    USER = '',
    PASSWORD = '',
    HOST = '';

var db = new SQ(DB_NAME, USER, PASSWORD, {host: HOST});
db.run();

//db.getQueryInterface().describeTable('').then(function(fields) {
//  console.log(fields);
//})
