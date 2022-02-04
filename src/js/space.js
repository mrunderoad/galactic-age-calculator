export class AgeCalculator {
  constructor(years, lifeExpectancy) {
  this.years = years;
  this.lifeExpectancy = lifeExpectancy;    
  };

  mercuryAge(years) {
    return years / .24;
  };

  mercuryLeft() {
    return this.lifeExpectancy / .24 - this.years / .24;
  };

  venusAge(years) {

  }

  // venusLeft() {

  // }

  // marsAge(years) {

  // }

  // marsLeft() {

  // }

  // jupiterAge(years) {

  // }

  // jupiterLeft() {

  // }

  // earthLeft() {

  // }

  // overExpected() {

  // }

}