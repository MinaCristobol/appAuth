// set up

var express  = require('express'),
app      = express(),
port     = process.env.PORT || 8080,
mongoose = require('mongoose'),
passport = require('passport'),
flash 	 = require('connect-flash');

// for express 4.0
var morgan       = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser   = require('body-parser'),
session      = require('express-session');

var configDB = require('./config/database.js');


// configuration

mongoose.connect(configDB.url); // connect to our database


// uncomment later
require('./config/passport')(passport); // pass passport for configuration


// set up express application

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating


// required for passport
app.use(session({ secret: 'mysessionmysessionmineminemine!' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes
// nodemon has problem with this line - object not a function. crashed and waiting for file change
require('./app/routes.js')(app, passport); // load routes, pass in app + fully configured passport


// launch

app.listen(port);
console.log('The magic happens on port ' + port);
