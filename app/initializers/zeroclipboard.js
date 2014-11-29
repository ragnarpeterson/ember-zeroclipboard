/* global ZeroClipboard */

export default {
  name: 'zeroclipboard',

  initialize: function(container) {
    var config = container.lookupFactory('config:environment')['ember-zeroclipboard'];
    if (config) { ZeroClipboard.config(config); }
  }
};
