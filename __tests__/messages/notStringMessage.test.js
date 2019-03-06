const string = require('../../src/messages/notStringMessage');

describe('not-a-string-message', () => {
  test('should return The username must be a string.', () => {
    expect(string('username')).toBe('The username must be a string.');
  });
});
