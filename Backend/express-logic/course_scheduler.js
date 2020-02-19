const database = require("./database");
const CourseScheduler = require("./contacting-scheduler/sched_local");

// MVP Request solutions count
const solutions = 1;

async function old_schedule(year, session) {

    // Request sent to CourseScheduler flask server in order to receive solutions
    let request = {};

    // Set # of solutions we would like to receive
    request.n_solutions = solutions;

    request.curricula = [];
    console.log('begin of c_s await database curricula');
    database.scheduler_curricula(year, session, function(curricula) {

        //console.log("Scheduler: " ,curricula);

        curricula.forEach(curriculum => {

            // console.log("1 curriculum: " , curriculum.courses);
            
            //let requestCurriculum = {}; //cponnor

            // This needs to change to a real course ID
            //requestCurriculum.curriculum_id = "id"; //connor

            request.curricula.curriculum_id = curriculum.id;   //nhi
            //request.courses = curriculum.courses; //Connor's
            request.curricula.courses = [];                   // Nhi's

            
            //request.courses.forEach( cID => {
            curriculum.courses.forEach(cID => {
                //let collectionName = cID._path.segments[0]; //not needed
                let courseID = cID._path.segments[1];
                console.log('begin of database course requests')
                 database.scheduler_course(courseID, function(duration) {
                    let requestCourseSet = {};
                    requestCourseSet.courseID = courseID;
                    requestCourseSet.n_periods=duration;

                    request.curricula.courses.push(requestCourseSet);

                    console.log(request);
                });

            });

        });
        console.log('after all that shit' + request);
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

        // next(request);
        
      });
      return request;
}

function frontEnd_schedule(courses, curricula, callback) {
  // console.log("type: " + typeof(curricula))
  request = {
    n_solutions: 666,
    curricula: curricula.map(curriculum => {

      // console.log("Curr Courses: ", curriculum.courses)
      // console.log("Courses: ", courses)
      filteredCourses = courses.filter(course => 
        curriculum.courses.some(courseCode => {
          // console.log(courseCode, course.code, courseCode == course.code)

          return courseCode == course.code;
        }));

      // console.log("FILTERS: ", filteredCourses)
      return {
        curriculum_id: curriculum.name,
        courses: filteredCourses.map(course => {
          return {
            course_id: course.code,
            n_periods: course.duration
          }
        })
      }
    })
  }

  CourseScheduler(request, function(response) {
    callback(response);
  });
  
}

module.exports = {
  old_schedule,
  frontEnd_schedule
}
