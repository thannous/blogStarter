/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('error-handler'),
    morgan = require('morgan'),
    // routes = require('./routes'),
    //api = require('./routes/api'),
    http = require('http'),
    path = require('path');

var app =  express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'app')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(errorHandler);
}

// production only
if (env === 'production') {
    // TODO
}


/**
 * Routes
 */


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/app/index.html'));

});


// JSON API
//app.get('/api/name', api.name);



/**
 * Start Server
 */

app.listen(3000);
console.log('Express server listening on port ' + app.get('port'));
