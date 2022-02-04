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
})