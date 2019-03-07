const notEmail = require('../../src/messages/notEmailMessage');

describe('not-an-email-message', () => {
  test('should return The email must be a valid email address.', () => {
    expect(notEmail('email')).toBe('The email must be a valid email address.');
  });
});
