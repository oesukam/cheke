const max = require('../../src/validators/max');

describe('max-validator', () => {
  test('should return The undefined must have less than or equal to undefined characters.', () => {
    expect(max()).toBe('The undefined must have less than or equal to undefined characters.');
  });

  test('should return The year must not be greater than 2019.', () => {
    expect(max({ value: 2020, label: 'year', valid: 2019 })).toBe('The year must not be greater than 2019.',);
  });

  test('should return false.', () => {
    expect(max({ value: 2000, label: 'year', valid: 2019 })).toBe(false);
  });

  test('should return false.', () => {
    expect(max({ value: 'usernameusername', label: 'username', valid: 20 })).toBe(false);
  });
});
