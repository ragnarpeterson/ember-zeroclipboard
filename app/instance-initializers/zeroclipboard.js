/* global ZeroClipboard */

function lookupFactory(app, name) {
  if (app.resolveRegistration) {
   return app.resolveRegistration(name);
 }

 return app.container.lookupFactory(name);
}

export default {
  name: 'zeroclipboard',

  initialize: function(application) {
    var config = lookupFactory(application, 'config:environment')['ember-zeroclipboard'];
    if (config) { ZeroClipboard.config(config); }
  }
};
