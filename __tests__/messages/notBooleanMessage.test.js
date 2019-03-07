const notString = require('../../src/messages/notStringMessage');

describe('not-a-string-message', () => {
  test('should return The confirmed must be a boolean.', () => {
    expect(notString('confirmed')).toBe('The confirmed must be a string.');
  });
});
