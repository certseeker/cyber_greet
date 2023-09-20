require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

//*connect to mongodb !
require('./config/database')

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, 'build')));



// Put API routes here, before the "catch all" route
//this indicates which files the api will be directed to for a specific path. For this onw, we are using a path for the users and their api. These are the paths only that we see on the back end to let the computer know where to look in the app. 
app.use('/api/users', require('./routes/api/users'));

//this is the path for the admin
app.use('/api/admin', require('./routes/admin/users'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

const port = process.env.PORT || 3005;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});