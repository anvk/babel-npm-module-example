'use strict';

/* global it, describe, before, after */

var _chai = require('chai');

var _person = require('../dist/person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('person tests', function () {

  var person = undefined;

  before(function () {
    return person = new _person2.default('Alex', '99');
  });

  after(function () {
    return person = undefined;
  });

  it('getName', function () {
    (0, _chai.expect)(person.getName()).to.equal('Alex');
  });

  it('getAge', function () {
    (0, _chai.expect)(person.getAge()).to.equal('99');
  });
});