const object = require('../../src/validators/object');

describe('object-validator', () => {
  test('should return `undefined must be an object.`', () => {
    expect(object()).toBe('undefined must be an object.');
  });

  test('should return `user must be an object.`', () => {
    expect(object({
        value: 'not an object',
        label: 'user',
      }),).toBe('user must be an object.');
  });

  test('should return `user must be an object.`', () => {
    expect(object({
        value: [],
        label: 'user',
      }),).toBe('user must be an object.');
  });

  test('should return false', () => {
    expect(object({
        value: {},
        label: 'user',
      }),).toBe(false);
  });
});
