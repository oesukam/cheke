const number = require('../../src/validators/number');

describe('number-validator', () => {
  test('should return The username must be a number.', () => {
    expect(number('not a number', 'age')).toBe('The age must be a number.');
  });

  test('should return The age must be a number.', () => {
    expect(number('21', 'age')).toBe('The age must be a number.');
  });

  test('should return false', () => {
    expect(number(21, 'age')).toBe(false);
  });
});
