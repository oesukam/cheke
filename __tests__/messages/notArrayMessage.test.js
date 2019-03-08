const notArray = require('../../src/messages/notArrayMessage');

describe('not-an-array-message', () => {
  test('should return `users must be an array.`', () => {
    expect(notArray('users')).toBe('users must be an array.');
  });
});
