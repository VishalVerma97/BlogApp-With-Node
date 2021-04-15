var _ = require('lodash');

let config = require('../config/config');

let noop = function() {};

let consoleLog = config.logging ? console.log.bind(console): noop;

let logger = {
  log: function() {
    console.log('inside log function');

    let args = _.toArray(arguments)
      .map(function(arg) {
        if(typeof arg === 'object') {
          let string = JSON.stringify(arg, 2);
          return string;
        } else {
          arg+='';
          return arg;
        }
      });
      console.log(args);
      consoleLog.apply(console, args);
  }
}

module.exports = logger;