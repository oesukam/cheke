const notInteger = require('../../src/messages/notIntegerMessage');

describe('not-an-integer-message', () => {
  test('should return The age must be an integer.', () => {
    expect(notInteger('age')).toBe('The age must be an integer.');
  });
});
