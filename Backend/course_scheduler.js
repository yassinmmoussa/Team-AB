// MVP Request solutions count
const solutions = 1;

function schedule() {

    // Request sent to CourseScheduler flask server in order to receive solutions
    let request = {};

    // Set # of solutions we would like to receive
    request.solutions = solutions;

    // Collection of curricula to be sceduled in the current run
    let curricula;
    
    //TODO: Database call filling curricula with objects from the database

    curricula.foreach(curriculum, function() {

        //TODO: Get all the courses of a given curriculum
        let courses;

        courses.foreach(course, function() {

            //TODO: Make a database call for this specific course to see how many periods it requires
        });

    });

    //TODO: Build constraints JSON object, ideally partially built by frontend

    //TODO: Build and finalize final JSON object
}


module.exports = function() {console.log("Consider your courses.... scheduled")}