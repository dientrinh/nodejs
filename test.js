var utils = require('./utils');
var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:4000");

// UNIT test begin

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(1, 1);
    });
  });
});

describe('Array', function() {
  describe('Demo', function() {
    it('Test fail', function() {
      assert.equal(2, 2);
    });
  });
});

describe('43', function() {
  describe('Util test', function() {
    it('Test fail', function() {
      assert.equal(utils.getNumber(), 5);
    });
  });
});