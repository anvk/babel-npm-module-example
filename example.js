'use strict';

/* global require */

var Developer = require('./dist/developer.js').default;

var developer = new Developer('Alex', '??');

developer.sayWhoAmI();
