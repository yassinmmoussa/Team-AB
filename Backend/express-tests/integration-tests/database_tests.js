// Required Test imports
const expect = require('chai').expect;

// File being tested
const database = require('../../express-logic/database');


// ===== Batch Documents / Get All Courses / Get All Curricula ===== //

it('t1:0 We get some stuff! course data doesn\'t return null.', function(done) {

    database.getAll('courses', 2020, 'W', function(data) {

        expect(data).to.exist;

    });

    done();
});

it('t1:1 We get more stuff! curricula doesn\'t return null.', function(done) {

    database.getAll('curricula', 2020, 'W', function(data) {

        expect(data).to.exist;

    });

    done();
});

it('t1:2 We get different stuff! Curricula data isn\'t course data', function(done) {

    database.getAll('curricula', 2020, 'W', function(curricula) {

        database.getAll('courses', 2020, 'W', function(courses) {

            expect(curricula).not.equal(courses);

        });
    });

    done();
});

it('t1:3 We get different stuff! Winter data isn\'t Fall data', function(done) {

    database.getAll('curricula', 2020, 'W', function(winter) {

        database.getAll('curricula', 2020, 'F', function(fall) {

            expect(winter).not.equal(fall);

        });
    });

    done();
});

it('t1:4 We get different stuff! 2019 data isn\'t 2020 data', function(done) {

    database.getAll('curricula', 2019, 'W', function(_2019) {

        database.getAll('curricula', 2020, 'W', function(_2020) {

            expect(_2020).not.equal(_2019);

        });
    });

    done();
});

it('t1:5 Where\'s the data! No data for years 2018 or earlier', function(done) {

    let i;
    for(i = 2000; i < 2018; i++) {
    
        database.getAll('curricula', i, 'F', function(data) {
            expect(data).empty;
        });

        database.getAll('curricula', i, 'W', function(data) {
            expect(data).empty;
        });
    }

    done();

});




// ===== Update Course ===== //

it('t1:6 Updating a course', function(done) {
    let course2beUpdated = {    
        capacity: 0,
        code: 1,
        colour: "#993366",
        course_ref: "1111",
        dept: "1",
        display: true,
        duration: "1",
        instructor: "Nhi Nhi",
        is_locked: false,
        lab_section: "",
        name: "1",
        room: "LSB",
        section: null,
        session: "1",
        starting_block: 0,
        type: "1",
        year: "1"
    }

    database.updateCourse(JSON.stringify(course2beUpdated), () => {
        database.lookUpDoc('courses',"1111", function(data) {
             
            let room = data[0].room;
            expect(room).equal('LSB');
            done();
        });
    });


});


// ===== Add Course  ===== //

/* it('t1:7 Add a course', function(done) {
  
    let course2beAdded = {
        capacity: 0,
        code: 2,
        colour: "#993366",
        course_ref: "2222",
        days: [],
        dept: "2",
        display: true,
        duration: "1",
        instructor: "Nhi Nhi",
        is_locked: false,
        lab_section: "",
        name: "1",
        room: "Not Set",
        section: null,
        session: "2",
        starting_block: 0,
        type: "2",
        year: "2"
    }
    database.addOneCourse(JSON.stringify(course2beAdded))
    database.lookUpDoc('courses',"2222", function(data) {
        expect(data).exist;
    })
    done();
}); */


// ===== Delete Course  ===== //

it('t1:8 Test deleting dummy data from db', function(done) {
    let course2beDeleted = {    
        capacity: 0,
        code: 1,
        colour: "#993366",
        course_ref: "1111",
        dept: "1",
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

    database.deleteCourse(JSON.stringify(course2beDeleted), () => {
        database.lookUpDoc('courses',"3333", function(data) {
            expect(data.length).to.equal(0);
            done();
        })    
    });
    
}); 
 
