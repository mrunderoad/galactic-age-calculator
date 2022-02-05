export class AgeCalculator {
  constructor(years, lifeExpectancy) {
  this.years = years;
  this.lifeExpectancy = lifeExpectancy;    
  }

  mercuryAge(years) {
    return years / .24;
  }

  mercuryLeft(lifeExpectancy, years) {
    return lifeExpectancy / .24 - years / .24;
  }

  venusAge(years) {
    return years / .62;
  }

  venusLeft(lifeExpectancy, years) {
    return lifeExpectancy / .62 - years / .62;
  }

  marsAge(years) {
    return years / 1.88;
  }

  marsLeft(lifeExpectancy, years) {
    return lifeExpectancy / 1.88 - years / 1.88;
  }

  jupiterAge(years) {
    return years / 11.86;
  }

  jupiterLeft(lifeExpectancy, years) {
    return lifeExpectancy / 11.86 - years / 11.86;
  }

  earthLeft(lifeExpectancy, years) {
    return lifeExpectancy - years;
  }

  overExpected(years, lifeExpectancy) {
    return years - lifeExpectancy;
  }
}