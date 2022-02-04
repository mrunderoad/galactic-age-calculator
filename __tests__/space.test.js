import { AgeCalculator } from './../src/js/space.js';

describe('AgeCalculator', () => {
  let ageCalculator; 
  beforeEach(() => {
    ageCalculator = new AgeCalculator(24, 99)
  });

  test("should create a new instance of ageCalculator", () => {
    expect(ageCalculator.years).toEqual(24);
    expect(ageCalculator.lifeExpectancy).toEqual(99);
  });

  test('should convert one year on Earth into one year on Mercury', () => {
    expect(ageCalculator.mercuryAge(1)).toEqual(4.166666666666667);
  });

  test('should return how many mercury years the user has left to live based on age and life expectancy', () => {
    expect(ageCalculator.mercuryLeft(99, 24)).toEqual(312.5);
  });

  test('should convert one year on Earth into one year on Venus', () => {
    expect(ageCalculator.venusAge(1)).toEqual(1.6129032258064517);
  });
});