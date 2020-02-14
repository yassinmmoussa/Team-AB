/**
 * This test is treated as test collection 0, its strictly
 * meant for examples of different types of tests for people
 * to work off of
 */

// Required Test imports
const expect = require('chai').expect;
const request = require('request');

/**
 * Really basic test that checks that when you make a 
 * request from the server, it has a body tag
 */
it('t0:0 There\'s a body tag! (Example)', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.exist;
        done();
    });
});