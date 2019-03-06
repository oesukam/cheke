const required = require('../../src/validators/required');

describe('required-validator', () => {
  test('should return The username field is required.', () => {
    expect(required({ value: undefined, label: 'username' })).toBe(
      'The username field is required.',
    );
  });

  test('should return The username field is required.', () => {
    expect(required({ value: null, label: 'username' })).toBe('The username field is required.');
  });
});
