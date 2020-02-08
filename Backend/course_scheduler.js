const database = require("./database");

// MVP Request solutions count
const solutions = 1;

function schedule(year, session, next) {

    // Request sent to CourseScheduler flask server in order to receive solutions
    let request = {};

    // Set # of solutions we would like to receive
    request.n_solutions = solutions;

    request.curricula = [];

    database.scheduler_curricula(year, session, function(curricula) {

        console.log("Scheduler: " + curricula);

        curricula.forEach(curriculum => {
            
            let requestCurriculum = {};

            // This needs to change to a real course ID
            requestCurriculum.curriculum_id = "id";

            request.courses = curriculum.courses;

        });


        request.constraints = [];

        next(request);

    });


}

module.exports = schedule;
