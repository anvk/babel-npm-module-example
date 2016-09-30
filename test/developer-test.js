/* global it, describe, before, after */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { expect } from 'chai';
import Developer from '../dist/developer';

describe('developer tests', () => {
  let developer;

  before(() => developer = new Developer('Alex', '99'));

  after(() => developer = undefined);

  it('getName', () => {
    expect(developer.getName()).to.equal('Alex');
  });

  it('getAge', () => {
    expect(developer.getAge()).to.equal('99');
  });

  it('getWhoAmI', () => {
    expect(developer.getWhoAmI()).to.equal('Alex JavaScript Developer');
  });
});
