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

        //console.log("Scheduler: " ,curricula);

        curricula.forEach(curriculum => {

            console.log("1 curriculum: " , curriculum.courses);
            
            //let requestCurriculum = {}; //cponnor

            // This needs to change to a real course ID
            //requestCurriculum.curriculum_id = "id"; //connor

            request.curricula.curriculum_id = curriculum.id;   //nhi
            //request.courses = curriculum.courses; //Connor's
            request.curricula.courses = [];                   // Nhi's

            
            //request.courses.forEach( cID => {
            curriculum.courses.forEach( cID => {
                //let collectionName = cID._path.segments[0]; //not needed
                let courseID = cID._path.segments[1];

                database.scheduler_course(courseID, function(duration) {
                    let requestCourseSet = {};
                    requestCourseSet.courseID = courseID;
                    requestCourseSet.n_periods=duration;

                    request.curricula.courses.push(requestCourseSet);

                    console.log(request);
                });

            });

        });

        request.constraints = [
        {
            "course_id": "hFUhTu8WIEeQEQ3i",
            "day": 2,
            "intervals": [
              {"start": 0,"end": 4},
              {"start": 6,"end": 9}
            ]
        },{
            "course_id": "hFUhTu8WIEeQEQ3i",
            "day": 4,
            "intervals": [
              {"start": 4,"end": 9
              }
            ]
          },{
            "course_id": "jWtVT6TsTjz0lFQb",
            "day": 3,
            "intervals": [
              {"start": 10,"end": 14},
              {"start": 16,"end": 19
              }
            ]
          }
        ]
        //request.constraints = [];

        next(request);

    });


}

module.exports = schedule;
