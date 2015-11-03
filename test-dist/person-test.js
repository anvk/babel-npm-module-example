'use strict';

/* global it, describe, before, after */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _distPersonJs = require('../dist/person.js');

var _distPersonJs2 = _interopRequireDefault(_distPersonJs);

describe('person tests', function () {

  var person;

  before(function () {
    return person = new _distPersonJs2['default']('Alex', '99');
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