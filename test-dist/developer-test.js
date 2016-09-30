'use strict';

var _chai = require('chai');

var _developer = require('../dist/developer');

var _developer2 = _interopRequireDefault(_developer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global it, describe, before, after */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

describe('developer tests', function () {
  var developer = void 0;

  before(function () {
    return developer = new _developer2.default('Alex', '99');
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