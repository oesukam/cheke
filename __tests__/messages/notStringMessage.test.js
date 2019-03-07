const notString = require('../../src/messages/notStringMessage');

describe('not-a-string-message', () => {
  test('should return The username must be a string.', () => {
    expect(notString('username')).toBe('The username must be a string.');
  });
});
