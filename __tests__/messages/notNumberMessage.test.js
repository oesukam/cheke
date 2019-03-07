const notNumber = require('../../src/messages/notNumberMessage');

describe('not-a-number-message', () => {
  test('should return The age must be a number.', () => {
    expect(notNumber('age')).toBe('The age must be a number.');
  });
});
