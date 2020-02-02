const database = require("./database");

// MVP Request solutions count
const solutions = 1;

function schedule(res, year, session) {

    // Request sent to CourseScheduler flask server in order to receive solutions
    let request = {};

    // Set # of solutions we would like to receive
    request.solutions = solutions;

    /* // Collection of curricula and courses to be scheduled in the current run
    let curricula = database.pcpCurricula(year, session);
    let allCourses = database.getAllCourses(year, session);

    curricula.foreach(curriculum, function() {

        allCourses.foreach(course, function() {

            // If the course is a part of the curriculum, add it to some data structure
            
        });

    }); */

    let curricula = database.pcpCurricula(res, year, session);
   
    

    //TODO: Build constraints JSON object, ideally partially built by frontend

    //TODO: Build and finalize final JSON object

    

}

// Function that is ran when other JS files call course_scheduler()

/* module.exports = function() {

    console.log("Consider your courses.... scheduled")

} */
module.exports = {
    course_scheduler: schedule,
}