const maxString = require('../../src/messages/notMaxStringMessage');
const maxNumber = require('../../src/messages/notMaxNumberMessage');

describe('above-max-message', () => {
  test('should return The page must not be greater than 100.', () => {
    expect(maxNumber({ value: 101, label: 'username' })).toBe(
      'The page must not be greater than 100.',
    );
  });

  test('should return The username must have less than or equals to 10 characters.', () => {
    expect(maxNumber({ value: 'usernameusername', label: 'username' })).toBe(
      'The username must have less than or equals to 10 characters.',
    );
  });
});
