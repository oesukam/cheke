const required = require('../../src/validators/required');

describe('required-validator', () => {
  test('should return The username field is required.', () => {
    expect(required(undefined, 'username')).toBe('The username field is required.');
  });

  test('should return The username field is required.', () => {
    expect(required(null, 'username')).toBe('The username field is required.');
  });
});
