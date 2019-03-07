const email = require('../../src/messages/notEmailMessage');

describe('not-an-email-message', () => {
  test('should return The email must be a valid email address.', () => {
    expect(email('email')).toBe('The email must be a valid email address.');
  });
});
