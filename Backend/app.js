// Auto generated imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const database = require('./database');

// ========================================================= //

/**
 * START OF 'ANGULAR' ROUTING
 * 
 * https://itnext.io/express-server-for-an-angular-application-part-1-getting-started-2cd27de691bd
 */
const compression = require("compression");
app.use(compression());

//-- Location of the actual frontend application --//
const app_folder = './Frontend/dist/timetable-app';

//-- Serve Static Files: Unsure what this actually does --//
app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

app.get('/api/courses', function(req, res) {

  console.log("Someone tried to GET some data");

  res.status(200).send({data: "whaddup"});
  database.example();

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

// For Hello World Button => May be removed when button is removed
app.post('/', function(req, res) {

  // Can only be seen when running the application locally
  console.log("Someone pressed the button!");
  res.status(200).sendFile('/', {root: app_folder});
  
});

//-- Serve Application Paths --//
app.all('*', function(req, res) {
  
  // Can only be seen when running the application locally
  console.log("Someone has requested our URL!");
  res.status(200).sendFile('/', {root: app_folder});

});

// ========================================================= //

// AUTO GENERATED CODE -- Purpose unknown

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;