'use strict';

/* global it, describe, before, after */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _distDeveloperJs = require('../dist/developer.js');

var _distDeveloperJs2 = _interopRequireDefault(_distDeveloperJs);

describe('developer tests', function () {

  var developer;

  before(function () {
    return developer = new _distDeveloperJs2['default']('Alex', '99');
  });

  after(function () {
    return developer = undefined;
  });

  it('getName', function () {
    (0, _chai.expect)(developer.getName()).to.equal('Alex');
  });

  it('getAge', function () {
    (0, _chai.expect)(developer.getAge()).to.equal('99');
  });

  it('getWhoAmI', function () {
    (0, _chai.expect)(developer.getWhoAmI()).to.equal('Alex JavaScript Developer');
  });
});