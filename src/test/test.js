var utils =require('../utils.js');
var assert = require('chai').assert;
const chai = require('chai');  
const chaiHttp = require('chai-http');  
chai.use(chaiHttp);
var expect  = require('chai').expect;

/*---Test API register*/
describe('Test call APIs LineID', function() {
     it('Test fail', function() {
      assert.equal(utils.getNumber(), 5);
    });
    
    //end
});