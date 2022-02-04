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
    return years / .62;
  };

  venusLeft() {
    return this.lifeExpectancy / .62 - this.years / .62;
  };

  marsAge(years) {
    return years / 1.88;
  };

  marsLeft() {
    return this.lifeExpectancy / 1.88 - this.years / 1.88;
  };

  jupiterAge(years) {
    return years / .0084;
  };

  jupiterLeft() {
    return this.lifeExpectancy / .0084 - this.years / .0084;
  };

  // earthLeft() {

  // }

  // overExpected() {

  // }

}