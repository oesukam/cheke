const notNumber = require('../../src/messages/notNumberMessage');

describe('not-a-number-message', () => {
  test('should return The username must be a number.', () => {
    expect(notNumber('username')).toBe('The username must be a number.');
  });
});
