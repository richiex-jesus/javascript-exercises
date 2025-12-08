const numberCheckerTest = require('./numberChecker')

describe('number test for true', () => {
  test('returns true when number is 20', () => {
    expect(numberCheckerTest(20)).toEqual(true);
  });
  test('returns true when number is 10', () => {
    expect(numberCheckerTest(10)).toEqual(true);
  });
  test('returns true when number is 9', () => {
    expect(numberCheckerTest(9)).toEqual(true);
  });
});

describe('number test for false', () => {
  test('returns false when number is 8', () => {
    expect(numberCheckerTest(8)).toEqual(false);
  });
  test('returns false when number is 21', () => {
    expect(numberCheckerTest(21)).toEqual(false);
  });
});
