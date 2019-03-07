const minString = require('../../src/messages/belowMinStringMessage');
const minNumber = require('../../src/messages/belowMinNumberMessage');

describe('above-max-message', () => {
  test('should return The page must be at least 100.', () => {
    expect(minNumber('page', 100)).toBe('The page must be at least 100.');
  });

  test('should return The username must be at least characters.', () => {
    expect(minString('username', 10)).toBe('The username must be at least 10 characters.');
  });
});
