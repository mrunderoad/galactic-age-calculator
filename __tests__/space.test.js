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
});