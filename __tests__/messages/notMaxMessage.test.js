const notMaxString = require('../../src/messages/aboveMaxStringMessage');
const notMaxNumber = require('../../src/messages/aboveMaxNumberMessage');

describe('above-max-message', () => {
  test('should return The page must not be greater than 100.', () => {
    expect(notMaxNumber('page', 100)).toBe('The page must not be greater than 100.');
  });

  test('should return The username must have less than or equal to 10 characters.', () => {
    expect(notMaxString('username', 10)).toBe('The username must have less than or equal to 10 characters.',);
  });
});
