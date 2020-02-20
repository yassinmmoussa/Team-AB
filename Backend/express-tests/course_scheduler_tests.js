// Required Test imports
const expect = require('chai').expect;

// File that we're testing
const courseScheduler = require('../express-logic/course_scheduler');

// Example Data
const fs = require('fs');

const curricula = JSON.parse(fs.readFileSync('express-tests/curricula_example.json'));
const courses = JSON.parse(fs.readFileSync('express-tests/courses_example.json'));

// Standard Timeout time
const pause = 100;

// ===== Request Builder ===== //

it('t2:0 What if we give it nothing? Generating an empty request (Course Scheduler)', function(done) {
  
    let request = courseScheduler.requestBuilder([], []);

    expect(request).exist;
    expect(request.curricula).empty;
    expect(request.constraints).empty;

    done();

});

it('t2:1 What does a request always have? Default attributes of a request', function(done) {
  
    let request = courseScheduler.requestBuilder([], []);

    expect(request.n_solutions).equal(courseScheduler.solutions);

    done();

});

it('t2:2 What does a normal request look like? Request with provided parameters isn\'t empty', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    expect(request.curricula).not.empty;
    // TODO: expect(request.constraints).not.empty;
    done();

});

it('t2:3 Do normal requests preserve curricula names? Checking provided data is found in the request', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    request.curricula.forEach(function(item, index) {

        expect(item.curriculum_id).to.satisfy(function (id) {
            
            if ((id === curricula[0].name) || (id === curricula[1].name)) {
                return true;
            } 
            
            else {
                return false;
            }

        });
    });

    done();

});

it('t2:4 Do normal requests preserve curricula courses? Checking provided data is found in the request', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    request.curricula.forEach(function(curriculum) {

        curriculum.courses.forEach(function(course) {

            if (curriculum.curriculum_id === curricula[0].name) 
                expect(curricula[0].courses).to.include(course.course_id)
            
            else 
                expect(curricula[1].courses).to.include(course.course_id)

        });

    });

    done();

});

it('t2:5 Do normal requests preserve course names? Checking provided data is found in the request', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);
    
    request.curricula.forEach(function(item) {

        item.courses.forEach(function(course) {

            expect(course.course_id).to.satisfy(function(id) {
                
                if (curricula[0].courses.includes(id)) 
                    return true;
                
                else if(curricula[1].courses.includes(id)) 
                    return true;

                else return false;

            });

        });

    });

    done();

});