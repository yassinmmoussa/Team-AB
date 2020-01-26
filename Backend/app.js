// Auto generated imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

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

/**
 * Example database storing
 * 
 * This code shouldn't be permanent, should just
 * serve as an example for future database calls
 */
let docRef = database.collection('users').doc('new_example');

// .set() creates or overwrites data
docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

// Server boot counter
let serverBoots = database.collection('Internal Data').doc('Server');

serverBoots.update({
  Boots: Firestore.FieldValue.increment(1)
});

// ========================================================= //

// AUTO GENERATED CODE -- Purpose unknown

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;