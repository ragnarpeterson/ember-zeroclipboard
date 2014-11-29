/* global ZeroClipboard */

import Em from 'ember';

var bind = Em.run.bind,
    alias = Em.computed.alias;

export default Em.Component.extend({
  tagName: 'button',
  type: 'button',
  title: 'Copy',
  client: null,
  text: null,
  targetId: null,
  afterCopy: null,

  'data-clipboard-text': alias('text'),
  'data-clipboard-target': alias('targetId'),

  attributeBindings: ['type', 'title', 'data-clipboard-text', 'data-clipboard-target'],

  _setup: function() {
    this.client = new ZeroClipboard(this.get('element'));
    this.client.on('aftercopy', bind(this, this.sendAction, 'afterCopy'));
  }.on('didInsertElement'),

  _teardown: function() {
    if (this.client) { this.client.destroy(); }
  }.on('willDestroyElement')
});
