var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Constants = require('../constants/constants');

var DemoAppStore = function() {
  EventEmitter.call(this);
  var self = this;

  this.addLogoListener = function(cb) {
    self.on(Constants.toggleLogo, cb);
  };

  this.dispatchToken = Dispatcher.register(function(action) {
    switch (action.actionType) {
      case Constants.toggleLogo:
        self.emit(Constants.toggleLogo, {
          showReactLogo: action.showReactLogo
        });
        break;
    };
  });
};
util.inherits(DemoAppStore, EventEmitter);

module.exports = DemoAppStore
