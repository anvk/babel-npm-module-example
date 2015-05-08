/*global it, describe, require*/

var chai = require('chai'),
    expect = chai.expect,
    Developer = require('../lib/developer.js');

describe('developer tests', function() {

  var developer;

  before(function() {
    developer = new Developer('Alex', '99');
  });

  after(function() {
    delete developer;
  });

  it('getName', function() {
    expect(developer.getName()).to.equal('Alex');
  });

  it('getAge', function() {
    expect(developer.getAge()).to.equal('99');
  });

  it('getWhoAmI', function() {
    expect(developer.getWhoAmI()).to.equal('Alex JavaScript Developer');
  });

});
