const notAllowed = require('../../src/messages/notAllowedMessage');

describe('not-allowed-message', () => {
  test('should return `users is not allowed.`', () => {
    expect(notAllowed('users')).toBe('users is not allowed.');
  });
});
