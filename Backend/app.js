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
  let year = req.query.year;
  let session = req.query.session;

  // STEP 2: Send data through database class, receive queried data
  database.example();
  // TODO: Change this to actual method when said method exists

  // STEP 3: Form a response for the frontend with the queried data & send
  res.status(200).send({
    "year": year, 
    "session": session
  });
  // TODO: Replace this response with actual queried Data

});

app.post('/api/courses', function(req, res) {

  console.log("Someone tried to POST some data");
});

app.put('/api/courses', function(req, res) {

  console.log("Someone tried to PUT some data");
});

app.delete('/api/courses', function(req, res) {

  console.log("Someone tried to DELETE some data");
});

// ========================================================= //

/**
 * FRONTEND => course scheduler interaction API
 */
app.get('/api/schedule', function(req, res) {

});

// ========================================================= //

//-- DEFAULT APPLICATION PATH --//
app.all('*', function(req, res) {
  
  res.status(200).sendFile('/', {root: app_folder});

});

// ========================================================= //

module.exports = app;