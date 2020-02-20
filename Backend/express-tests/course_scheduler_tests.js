// Required Test imports
const expect = require('chai').expect;

// File that we're testing
const courseScheduler = require('../express-logic/course_scheduler');

// Example Data
const fs = require('fs');

const curricula = JSON.parse(fs.readFileSync('express-tests/curricula_example.json'));
const courses = JSON.parse(fs.readFileSync('express-tests/courses_example.json'));


// ===== Request Builder ===== //

it('t3:0 What if we give it nothing? Generating an empty request (Course Scheduler)', function(done) {
  
    let request = courseScheduler.requestBuilder([], []);

    expect(request).exist;
    expect(request.curricula).empty;
    expect(request.constraints).empty;

    done();

});

it('t3:1 What does a request always have? Default attributes of a request', function(done) {
  
    let request = courseScheduler.requestBuilder([], []);

    expect(request.n_solutions).equal(1);

    done();

});

it('t3:2 What does a normal request look like? Request with provided parameters isn\'t empty', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    setTimeout(function() {
        expect(request.curricula).not.empty;
        // expect(request.constraints).not.empty;
    }, 1000);
    

    done();

});

it('t3:3 Do normal requests preserve curricula names? Checking provided data is found in the request', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    setTimeout(function() {
        
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


    }, 1000);
    

    done();

});

it('t3:4 Do normal requests preserve curricula courses? Checking provided data is found in the request', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    setTimeout(function() {

        request.curricula.forEach(function(curriculum) {

            curriculum.courses.forEach(function(course) {

                if (id === curricula[0].name) 
                    expect(curricula[0].courses).to.have(course.course_id)
                
                else 
                    expect(curricula[1].courses).to.have(course.course_id)

            });

        });


    }, 1000);
    

    done();

});

it('t3:5 Do normal requests preserve course names? Checking provided data is found in the request', function(done) {

    let request = courseScheduler.requestBuilder(curricula, courses);

    setTimeout(function() {
        
        request.forEach(function(item) {

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


    }, 1000);
    

    done();

});