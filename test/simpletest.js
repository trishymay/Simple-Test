'use strict';

var expect = require('chai').expect;
var greeting = require('../simple');

describe('greeting function', function(name) {
  it('should return hello name', function() {
    expect(greeting.greet(name)).to.eql('Hello ' + name);
  });

});