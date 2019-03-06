const string = require('../../src/validators/string');

describe('string-validator', () => {
  test('should return The username must be a string.', () => {
    expect(string(21, 'username')).toBe('The username must be a string.');
  });

  test('should return The username must be a string.', () => {
    expect(string(undefined, 'username')).toBe('The username must be a string.');
  });

  test('should return false', () => {
    expect(string('username', 'username')).toBe(false);
  });
});
