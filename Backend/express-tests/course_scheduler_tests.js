// Required Test imports
const expect = require('chai').expect;

const courseScheduler = require('../express-logic/course_scheduler');




// ===== Request Builder ===== //

it('t3:0 What if we give it nothing? Generating an empty request (Course Scheduler)', function(done) {
  
    let request = courseScheduler.requestBuilder([], []);

    expect(request).exist;

    done();

});