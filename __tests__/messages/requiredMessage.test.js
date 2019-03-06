const required = require('../../src/messages/requiredMessage');

describe('required-message', () => {
  test('should return The username field is required.', () => {
    expect(required('username')).toBe('The username field is required.');
  });
});
