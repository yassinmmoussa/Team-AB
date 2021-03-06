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
 * Database Interaction API
 */

// GET Courses
app.get('/api/courses', function(req, res) {

  // STEP 1: Parse the data from the query string
  let year = parseInt(req.query.year);
  let session = req.query.session;

  // STEP 2: Send data through database class, receive queried data
  database.getAll('courses', year, session, function(courses) {

    // STEP 3: Form a response for the frontend with the queried data & send
    res.status(200).send(courses);
  });
});

// POST a course
app.post('/api/courses', function(req, res) {
  console.log("Someone tried to POST some data");
  console.log(req.body.course);
  database.addOneCourse(req.body.course);
});

// PUT / Update a course
app.put('/api/courses', function(req, res) {

  database.updateCourse(req.body.course, () => {});
});

// DELETE a course
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

// GET all curricula
app.get('/api/curricula', function(req, res) {

  // STEP 1: Parse the data from the query string
  let year = parseInt(req.query.year);
  let session = req.query.session;

  // STEP 2: Send data through database class, receive queried data
  database.getAll('curricula', year, session, function(curricula) {

    // STEP 3: Form a response for the frontend with the queried data & send
    res.status(200).send(curricula);
  });
});

// POST a curriculum
app.post('/api/curricula', function(req, res) {
  console.log("Someone tried to POST a curriculum");
  console.log(req.body.curriculum);
  database.addOneCurriculum(req.body.curriculum);
});

// PUT / Update a curriculum
app.put('/api/curricula', function(req, res) {
  database.updateCurriculum(req.body.curriculum, () => {});
});

// DELETE a curriculum
app.delete('/api/curricula', function(req, res) {
  console.log("Someone tried to DELETE a curriculum");
  let { year, session, dept, name, curriculaRef, courseRefs } = req.query;
  let curriculum = {
    year: year - 0,
    session,
    dept,
    name,
    curriculaRef,
    courseRefs
  }
  database.deleteCurriculum(curriculum, () => {});
});

// ========================================================= //

/**
 * Course Scheduler Interaction API
 */
app.post('/api/schedule/runOptimizer', function(req, res) {
  let coursesString = '[\n' + req.body.courses + '\n]';
  let curriculaString = '[\n' + req.body.curricula + '\n]';
  let courses = JSON.parse(coursesString);
  let curricula = Object.values(JSON.parse(curriculaString));

  // Call scheduler
  scheduler.frontEnd_schedule(courses, curricula, function(response) {
    console.log('Response:', response);
    // Send response to frontend
    res.status(200).send(response);
  });

})

// ========================================================= //

/**
 * Login Authentication Logic
 */
app.post('/api/auth', (req, res) => {

  let username = req.body.params.username;
  let password = req.body.params.password;

  let result = username === 'admin' && password === 'notKevin';
  res.status(200).send({authenticated: result});
})


// ========================================================= //

//-- DEFAULT APPLICATION PATH --//
app.all('*', function(req, res) {

  res.status(200).sendFile('/', {root: app_folder});

});


// ========================================================= //

app.listen(3434, function() {
  console.log("server is running on port 3434");
});

module.exports = app;
