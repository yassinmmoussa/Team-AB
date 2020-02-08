// Auto generated imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// Internal APIs and Utility classes
const database = require('./database');
const scheduler = require('./course_scheduler');

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

  console.log(`The parameters are: ${year}, ${session}`);

  // STEP 2: Send data through database class, receive queried data
  database.getAllCourses('courses', year, session, function(courses) {
    
    // STEP 3: Form a response for the frontend with the queried data & send
    res.status(200).send(courses);
    console.log(courses);
  });
});

app.post('/api/courses', function(req, res) {
  console.log("Someone tried to POST some data");
  database.postCourses();
});

app.put('/api/courses', function(req, res) {

  console.log("Someone tried to PUT some data");
  database.putCourse();
});

app.delete('/api/courses', function(req, res) {

  console.log("Someone tried to DELETE some data");
  database.deleteCourse();
});

/**
 * Curricula Requests
 */

app.get('/api/curricula', function(req, res) {

  // STEP 1: Parse the data from the query string
  let year = parseInt(req.query.year);
  let session = req.query.session;

  console.log(`The parameters are: ${year}, ${session}`);

  // STEP 2: Send data through database class, receive queried data
  database.getAllCurricula('curricula', year, session, function(curricula) {
    
    // STEP 3: Form a response for the frontend with the queried data & send
    res.status(200).send(curricula);
    console.log(curricula);
  });
});

// ========================================================= //

/**
 * FRONTEND => course scheduler interaction API
 */
app.get('/api/schedule', function(req, res) {
  scheduler();
});

app.get('/api/schedule/runOptimizer', function(req, res) {
  let courses = req.query.courses;
  let curricula = req.query.curricula;
  console.log(`The courses are ${courses}`);
  console.log(`The curricula are ${curricula}`);
  res.status(200).send({dope: "All is gucci"}); // Send back results of optimization here
})

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