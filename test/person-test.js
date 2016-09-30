/* global it, describe, before, after */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { expect } from 'chai';
import Person from '../dist/person';

describe('person tests', () => {
  let person;

  before(() => person = new Person('Alex', '99'));

  after(() => person = undefined);

  it('getName', () => {
    expect(person.getName()).to.equal('Alex');
  });

  it('getAge', () => {
    expect(person.getAge()).to.equal('99');
  });
});
