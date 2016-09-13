// mul.test.js
var mul = require('../mul.js');
var expect = require('chai').expect;

describe('mul', function() {
    it('2 * 3 = 6',function(){
        expect(mul(2, 3)).to.be.equal(6);
    });

});
