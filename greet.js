'use strict';

var greeting = require('./simple');
var hello = exports = module.exports = {};

hello.person = function() {
  var result = greeting.greet(process.argv[2]);
  console.log(result);
  return result;
};

hello.person();