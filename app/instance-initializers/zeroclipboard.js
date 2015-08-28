/* global ZeroClipboard */

export default {
  name: 'zeroclipboard',

  initialize: function(application) {
    var config = application.container.lookupFactory('config:environment')['ember-zeroclipboard'];
    if (config) { ZeroClipboard.config(config); }
  }
};
