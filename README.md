# ember-zeroclipboard

ZeroClipboard functionality wrapped up in a simple Ember component.

## Installation

* `npm install --save ember-zeroclipboard`
* `ember g ember-zeroclipboard`

## Usage

```hbs
{{#zero-clipboard text=textToCopy afterCopy='didCopy'}}Copy{{/zero-clipboard}}
```

You can also configure ZeroClipboard any way you want by simply specifying the [options](https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/api/ZeroClipboard.Core.md#configuration-options) in your application's `config/environment.js` file:

```javascript
ENV['ember-zeroclipboard'] = {
  activeClass: 'active',
  hoverClass: 'hover'
};
```
