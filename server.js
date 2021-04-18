const express = require('express');
const app = express();
const api = require('./api/api');
const config = require('./config/config');
const logger = require('./utils/logger');
const auth = require('./auth/routes');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

// setting up app middleware
require('./middlewares/appMiddleware')(app);

// setup the api
app.use('/api', api);
app.use('/auth', auth);
// set up global error handling

app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send('Oops');
});

module.exports = app;