// Auto generated imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const request = require('request-promise');
const axios = require('axios')
const fs = require('fs');
const circJSON = require('circular-json');

const app = express();

// Internal APIs and Utility classes
const database = require('./express-logic/database');
const scheduler = require('./express-logic/course_scheduler');

// ========================================================= //

// AUTO GENERATED CODE

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ========================================================= //

/**
 * 'ANGULAR' ROUTING documentation
 *
 * https://itnext.io/express-server-for-an-angular-application-part-1-getting-started-2cd27de691bd
 */
const compression = require("compression");
app.use(compression());

//-- Location of the actual frontend application --//
const app_folder = './Frontend/dist/timetable-app';

//-- Serve Static Files: Unsure what this actually does --//
app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

// ========================================================= //

/**
 * FRONTEND => Database interaction API
 */
app.get('/api/courses', function(req, res) {

  // STEP 1: Parse the data from the query string
  let year = parseInt(req.query.year);
  let session = req.query.session;

  // STEP 2: Send data through database class, receive queried data
  database.getAllCourses('courses', year, session, function(courses) {

    // STEP 3: Form a response for the frontend with the queried data & send
    res.status(200).send(courses);
  });
});

app.post('/api/courses', function(req, res) {
  console.log("Someone tried to POST some data");
  console.log(req.body.course);
  database.addOneCourse(req.body.course, () => {});
});

app.put('/api/courses', function(req, res) {

  database.updateCourse(req.body.course, () => {});
});

app.delete('/api/courses', function(req, res) {
  console.log("Someone tried to DELETE some data");
  let { year, session, dept, code, section, type } = req.query
  let course = {
    year: year - 0,
    session,
    dept,
    code: code - 0,
    section,
    type
  }
  database.deleteCourse(course, () => {});
});

/**
 * Curricula Requests
 */

app.get('/api/curricula', function(req, res) {

  // STEP 1: Parse the data from the query string
  let year = parseInt(req.query.year);
  let session = req.query.session;

  // STEP 2: Send data through database class, receive queried data
  database.getAllCurricula('curricula', year, session, function(curricula) {

    // STEP 3: Form a response for the frontend with the queried data & send
    res.status(200).send(curricula);
  });
});

// ========================================================= //

/**
 * FRONTEND => course scheduler interaction API
 */
app.get('/api/schedule', function(req, res) {
  scheduler();
});

app.post('/api/schedule/runOptimizer', function(req, res) {
  let coursesString = '[\n' + req.body.courses + '\n]';
  let curriculaString = '{\n' + req.body.curricula + '\n}';
  console.log(coursesString);
  let courses = JSON.parse(coursesString);
  let curricula = Object.values(JSON.parse(curriculaString));

  // Call scheduler
  scheduler.frontEnd_schedule(courses, curricula, function(response) {
    console.log('Response:', response);
    // Send response to frontend
    res.status(200).send(response);
  });

})

app.post('/api/schedulerTest', function(req, res) {



});

app.post('/api/auth', (req, res) => {

  let username = req.body.params.username;
  let password = req.body.params.password;

  let result = username === 'admin' && password === 'notKevin';
  res.status(200).send({authenticated: result});
})

// Simulation bad_test for calling max.
// Requires max to be running on localhost:8080
app.get('/bad_test', async function(req, res) {
  try {
    console.log('IM A BAD TEST - BILLIE EILLISH');

    let data = circJSON.parse(fs.readFileSync('./express-logic/contacting-scheduler/sample_sched_request', 'utf8'));

    // Try to parse data from query, not quite correct format yet -- NEEDS TO BE DONE
    // let data = {
    //   n_solutions: 2,
    //   curricula: req.query.curricula,
    //   constraints: []
    // };

    console.log(data);
    let response = await axios.post('http://localhost:8080/sched', data) // Maximillian is running on :8080
    .then((res) => {
      return res; // Max returns, need to provide this as the result of await promise
    })
    .catch((error) => {
     //console.error(error)
    })
    console.log('made it to response' + response); // response now holds the output of max
    res.status(200).send(circJSON.stringify(response)); // Send completed response back to front
  } catch (e) {
    console.log('yo async had issue');
    console.log(e);
  }


});


// ========================================================= //

//-- DEFAULT APPLICATION PATH --//
app.all('*', function(req, res) {

  res.status(200).sendFile('/', {root: app_folder});

});




// ========================================================= //

app.listen(3000,function(){
  console.log("server is running on port 3000");
});

module.exports = app;
