const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
/**
 * Angular Routing
 * 
 * https://itnext.io/express-server-for-an-angular-application-part-1-getting-started-2cd27de691bd
 * 
 * Above link is where the ideas bedind this routing code came from
 */
const compression = require("compression");
app.use(compression());

const app_folder = './Frontend/dist/timetable-app';

//-- Serve Static Files --//
app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

//-- Serve Application Paths --//
app.get('*', function(req, res) {
  
  console.log("Someone has requested our URL!");
  res.status(200).sendFile('/', {root: app_folder});

});
/**
 * END OF ROUTING CODE from the link above
 */

/**
 * HTML Post Request handling
 * 
 * https://flaviocopes.com/express-post-query-variables/
 */

// This isn't working
app.post('/', function(req, res) {

  console.log("Someone pressed the button!");
  res.status(200).sendFile('/', {root: app_folder});
  
});

/**
 * End of Post Request Handling
 */


/**
 * Google Firestore setup section
 * 
 * https://github.com/googleapis/nodejs-firestore-session#google-cloud-firestore-session
 */
const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

app.use(
  session({
    store: new FirestoreStore({
      dataset: new Firestore({
        kind: 'express-sessions',
      }),
    }),
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
  })
);
// END of Google Firestore sections


/**
 * view engine setup and routing
 * 
 * Future refactoring ticket could be removing these
 * since we won't be using either feature.
 * 
 * This would (possibly) include deleting the views
 * folder as well as the routes folder in the backend
 */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/users', usersRouter);
// End of view engine & routing code


//-- AUTO GENERATED CODE BEGINS - purpose of most of it -> unknown --//

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
