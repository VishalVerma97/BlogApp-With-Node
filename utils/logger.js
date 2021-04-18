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
  },

  error: function() {
    var args = _.toArray(arguments)
      .map(function(arg) {
        arg = arg.stack || arg;
        var name = arg.name || '[ ❌ ERROR ❌ ]';
        var log = name.yellow + '  ' + arg.red;
        return log;
      });

    consoleLog.apply(console, args);
  }
}

module.exports = logger;