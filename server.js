const express = require('express');
const app = express();
const api = require('./api/api');

// setting up app middleware
require('./middlewares/appMiddleware')(app);

// setup the api
app.use('/api', api);


module.exports = app;