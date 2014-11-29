'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-zeroclipboard': {

    },

    contentSecurityPolicy: {
      'default-src': "'self'"
    }
  };
};
