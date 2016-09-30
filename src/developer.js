/* global console */

import Person from './person';

export const DEFAULT_OCCUPATION = 'JavaScript Developer';

export default class Developer extends Person {
  constructor(name, age, occupation = DEFAULT_OCCUPATION) {
    super(name, age);
    this.occupation = occupation;
  }

  sayWhoAmI() {
    console.log(this.getWhoAmI());
  }

  getWhoAmI() {
    return `${this.name} ${this.occupation}`;
  }
}
