'use strict';

var test = require('tape');

test('base:function:test', function (t) {
  t.ok(typeof test === 'function');
  t.end();
});
