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

  test('should return how many Mercury years the user has left to live based on age and life expectancy', () => {
    expect(ageCalculator.mercuryLeft(99, 24)).toEqual(312.5);
  });

  test('should convert one year on Earth into one year on Venus', () => {
    expect(ageCalculator.venusAge(1)).toEqual(1.6129032258064517);
  });

  test('should return how many Venus years the user has left to live based on age and life expectancy', () => {
    expect(ageCalculator.venusLeft(99, 24)).toEqual(120.96774193548387);
  });

  test('should convert one year on Earth into one year on Mars', () => {
    expect(ageCalculator.marsAge(1)).toEqual(0.5319148936170213);
  });

  test('should return how many Mars years the user has left to live based on age and life expectancy', () => {
    expect(ageCalculator.marsLeft(99, 24)).toEqual(39.8936170212766);
  });

  test('should convert one year on Earth into one year on Jupiter', () => {
    expect(ageCalculator.jupiterAge(1)).toEqual(119.04761904761905);
  });

  test('should return how many Jupiter years the user has left to live based on age and life expectancy', () => {
    expect(ageCalculator.jupiterLeft(99, 24)).toEqual(8928.57142857143);
  });

  test('should return years left to live on Earth', () => {
    expect(ageCalculator.earthLeft(99, 24)).toEqual(75);
  });
});