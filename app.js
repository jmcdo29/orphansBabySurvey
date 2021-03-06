const express = require('express');
const validator = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoDB = require('mongodb');
const mongoose = require('mongoose');
const router = require('./routes/index');
const uri = process.env.MONGODB_URI || 'mongodb://heroku_ztrjz5v4:qd9qf3glaih167fgm0hcd8ee32@ds119486.mlab.com:19486/heroku_ztrjz5v4';
mongoose.Promise = global.Promise;
mongoose.connect(uri);
let db = mongoose.connection;

const app = express();

// Set view engine
app.set('view engine','pug');

// Express Validator
app.use(validator());

// Set static folder
app.use(express.static('./public'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

// App routing
app.use('/', router);

module.exports = app;