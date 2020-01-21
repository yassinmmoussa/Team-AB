// Auto generated imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// ========================================================= //

/**
 * START OF ANGULAR ROUTING
 * 
 * https://itnext.io/express-server-for-an-angular-application-part-1-getting-started-2cd27de691bd
 */
const compression = require("compression");
app.use(compression());

//-- Location of the actual frontend application --//
const app_folder = './Frontend/dist/timetable-app';

//-- Serve Static Files: Unsure what this actually does --//
app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

//-- Serve Application Paths --//
app.get('*', function(req, res) {
  
  // Can only be seen when running the application locally
  console.log("Someone has requested our URL!");

  res.status(200).sendFile('/', {root: app_folder});

});

// ========================================================= //

/**
 * HTML Post Request handling
 * 
 * https://flaviocopes.com/express-post-query-variables/
 */

// This isn't working
app.post('/', function(req, res) {

  // Can only be seen when running the application locally
  console.log("Someone pressed the button!");
  res.status(200).sendFile('/', {root: app_folder});
  
});


// ========================================================= //

/**
 * Google Firestore setup section
 * 
 * https://github.com/googleapis/nodejs-firestore-session#google-cloud-firestore-session
 */
const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

const database = require('./top_secret/database');

const db = database;

// ========================================================= //

/**
 * Example database storing
 * 
 * This code shouldn't be permanent, should just
 * serve as an example for future database calls
 */
let docRef = db.collection('users').doc('new_example');

// .set() creates or overwrites data
docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

// Server boot counter
let serverBoots = db.collection('Internal Data').doc('Server');

serverBoots.update({
  Boots: Firestore.FieldValue.increment(1)
});

// ========================================================= //

/**
 * View engine configuration
 * 
 * This section is currently in use but will later be removed
 * Its involved in producing error 404 pages from the backend
 * This concern will be moving to the front end
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ========================================================= //

// AUTO GENERATED CODE -- Purpose unknown

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ========================================================= //

// Redirecting users to an Error 404 page

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
