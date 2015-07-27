var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var DemoAppActions = {
  toggleLogo: function(showReactLogo) {
    Dispatcher.dispatch({
      actionType: Constants.toggleLogo,
      showReactLogo: !showReactLogo
    });
  }
};

module.exports = DemoAppActions;
