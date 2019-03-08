const notArray = require('../../src/messages/notArrayMessage');

describe('not-an-array-message', () => {
  test('should return The users must be an integer.', () => {
    expect(notArray('users')).toBe('The users must be an integer.');
  });
});
