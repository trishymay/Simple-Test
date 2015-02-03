'use strict';

var expect = require('chai').expect;
var greeting = require('../greet');

describe('greet function', function() {
  it('should return hello name', function() {
    process.argv[2] = 'Tricia'
    expect(greeting.person()).to.eql('Hello Tricia');
  });

});