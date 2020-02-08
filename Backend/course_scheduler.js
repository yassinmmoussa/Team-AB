const database = require("./database");

// MVP Request solutions count
const solutions = 1;

function schedule(year, session) {

    // Request sent to CourseScheduler flask server in order to receive solutions
    let request = {};

    // Set # of solutions we would like to receive
    request.solutions = solutions;

    // Setting up curricula array
    request.curricula = [];

    // Collection of curricula and courses to be scheduled in the current run
    // let curricula, allCourses; 

    database.pcpCurricula(year, session, function(curricula) {

        database.pcpCourses("1", function(courses) {

            // Loop variable -- May be able to refactor first loop
            let loop = 0;

            curricula.foreach(curriculum, function() {

                request.curricula.push({});
                request.curricula[loop].curriculum_id = `Curriculum${loop}`;
                request.curricula[loop].courses = []

                courses.foreach(course, function() {

                    // If the course is a part of the curriculum, add it to some data structure
                    // This currently just adds every course, needs
                    // to filter ones that correspend to the curriculum
                    request.curricula[loop].courses.push(course);

                });

                loop++;

            });

            //TODO: Build constraints JSON object, ideally partially built by frontend
            request.constraints = [];

            //TODO: Build and finalize final JSON object
            console.log(request);

        });
    });
}

// Function that is ran when other JS files call course_scheduler()
module.exports = schedule