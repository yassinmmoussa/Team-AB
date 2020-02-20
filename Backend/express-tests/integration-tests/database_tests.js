// Required Test imports
const expect = require('chai').expect;

// File being tested
const database = require('../../express-logic/database');


// ===== Batch Documents / Get All Courses / Get All Curricula ===== //

it('t1:0 We get some stuff! getAllCourses doesn\'t return null. (Database)', function(done) {

    database.getAllCourses('courses', 2020, 'W', function(data) {

        expect(data).to.exist;

    });

    done();
});

it('t1:1 We get more stuff! getAllCurricula doesn\'t return null.', function(done) {

    database.getAllCurricula('curricula', 2020, 'W', function(data) {

        expect(data).to.exist;

    });

    done();
});

it('t1:2 We get different stuff! Curricula data isn\'t course data', function(done) {

    database.getAllCurricula('curricula', 2020, 'W', function(curricula) {

        database.getAllCourses('courses', 2020, 'W', function(courses) {

            expect(curricula).not.equal(courses);

        });
    });

    done();
});

it('t1:3 We get different stuff! Winter data isn\'t Fall data', function(done) {

    database.getAllCurricula('curricula', 2020, 'W', function(winter) {

        database.getAllCurricula('curricula', 2020, 'F', function(fall) {

            expect(winter).not.equal(fall);

        });
    });

    done();
});

it('t1:4 We get different stuff! 2019 data isn\'t 2020 data', function(done) {

    database.getAllCurricula('curricula', 2019, 'W', function(_2019) {

        database.getAllCurricula('curricula', 2020, 'W', function(_2020) {

            expect(_2020).not.equal(_2019);

        });
    });

    done();
});

it('t1:5 Where\'s the data! No data for years 2018 or earlier', function(done) {

    let i;
    for(i = 2000; i < 2018; i++) {
    
        database.getAllCurricula('curricula', i, 'F', function(data) {
            expect(data).empty;
        });

        database.getAllCurricula('curricula', i, 'W', function(data) {
            expect(data).empty;
        });
    }

    done();

});

it('t1:5 Where\'s the data! No data for years 2018 or earlier', function(done) {

    let i;
    for(i = 2000; i < 2018; i++) {
    
        database.getAllCurricula('curricula', i, 'F', function(data) {
            expect(data).empty;
        });

        database.getAllCurricula('curricula', i, 'W', function(data) {
            expect(data).empty;
        });
    }

    done();

});



// ===== Update Course ===== //

// it('t2:0 Did it work? Updating a course that isn\'t in the database', function(done) {
//     let course = {
//         year: 2020,
//         session: 'W',
//         dept: 'EECS',
//         code: 3421,
//         section: 'N',
//         type: 'lecture',
//       }

//     database.updateCourse(JSON.stringify(course), 
//         //success => res.status(200).send({wow: success}));

//     done();

// });


// ===== Add Course  ===== //

// it('t3:0 Add a course', function(done) {
  
    let course2beAdded = {
        capacity: 0,
        code: 1,
        colour: "#993366",
        course_ref: "1111",
        days: [],
        dept: "EECS",
        display: true,
        duration: "1",
        instructor: "Nhi Nhi",
        is_locked: false,
        lab_section: "",
        name: "1",
        room: "Not Set",
        section: null,
        session: "1",
        starting_block: 0,
        type: "1",
        year: "1"
    }

    database.addOneCourse(JSON.stringify(course2beAdded))
    database.lookUpDoc('courses',"1111", function(data) {
        expect(data).empty;
    })
    done();
    

// });


// ===== Delete Course  ===== //

// it('t4:0 Test deleting dummy data from db', function(done) {
//     let course2beDeleted = {
//         year: "1",
//         session: "1",
//         dept: "EECS",
//         code: 1,
//         section: null,
//         type: "1"
//     }
//     database.deleteCourse(JSON.stringify(course2beDeleted),
//         success => res.status(200).send({wow: success}));
// });
