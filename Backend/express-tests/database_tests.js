// Required Test imports
const expect = require('chai').expect;

// File being tested
const database = require('../database');

it('t1:0 We get some stuff! getAllCourses doesn\'t return null. (Database)', function(done) {

    database.getAllCourses('courses', 2020, 'W', function(data) {

        expect(data).to.exist;
        done();

    });
});

it('t1:1 We get more stuff! getAllCurricula doesn\'t return null.', function(done) {

    database.getAllCurricula('curricula', 2020, 'W', function(data) {

        expect(data).to.exist;
        done();

    });
});

it('t1:2 We get different stuff! Curricula data isn\'t course data', function(done) {

    database.getAllCurricula('curricula', 2020, 'W', function(curricula) {

        database.getAllCourses('courses', 2020, 'W', function(courses) {

            expect(curricula).not.equal(courses);
            done();

        });
    });
});

it('t1:3 We get different stuff! Winter data isn\'t Fall data', function(done) {

    database.getAllCurricula('curricula', 2020, 'W', function(winter) {

        database.getAllCurricula('curricula', 2020, 'F', function(fall) {

            expect(winter).not.equal(fall);
            done();

        });
    });
});

it('t1:4 We get different stuff! 2019 data isn\'t 2020 data', function(done) {

    database.getAllCurricula('curricula', 2019, 'W', function(_2019) {

        database.getAllCurricula('curricula', 2020, 'W', function(_2020) {

            expect(_2020).not.equal(_2019);
            done();

        });
    });
});