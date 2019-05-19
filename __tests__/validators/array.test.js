const array = require('../../src/validators/array');

describe('array-validator', () => {
  test('should return `undefined must be an array.`', () => {
    expect(array()).toBe('undefined must be an array.');
  });

  test('should return `users must be an array.`', () => {
    expect(array({
        value: 'not an array',
        label: 'users',
      }),).toBe('users must be an array.');
  });

  test('should return `users must be an array.`', () => {
    expect(array({
        value: {},
        label: 'users',
      }),).toBe('users must be an array.');
  });

  test('should return false', () => {
    expect(array({
        value: [],
        label: 'users',
      }),).toBe(false);
  });
});
