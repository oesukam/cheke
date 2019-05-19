const string = require('../../src/validators/string');

describe('string-validator', () => {
  test('should return The undefined must be a string.', () => {
    expect(string()).toBe('The undefined must be a string.');
  });

  test('should return The username must be a string.', () => {
    expect(string({
        value: 21,
        label: 'username',
      }),).toBe('The username must be a string.');
  });

  test('should return The username must be a string.', () => {
    expect(string({
        value: undefined,
        label: 'username',
      }),).toBe('The username must be a string.');
  });

  test('should return false', () => {
    expect(string({
        value: 'username',
        label: 'username',
      }),).toBe(false);
  });
});
