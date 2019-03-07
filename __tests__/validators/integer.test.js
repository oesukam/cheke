const integer = require('../../src/validators/integer');

describe('integer-validator', () => {
  test('should return The undefined must be an integer.', () => {
    expect(integer()).toBe('The undefined must be an integer.');
  });

  test('should return The age must be an integer.', () => {
    expect(integer({
        value: 'not an integer',
        label: 'age',
      }),).toBe('The age must be an integer.');
  });

  test('should return The age must be an integer.', () => {
    expect(integer({
        value: '21',
        label: 'age',
      }),).toBe('The age must be an integer.');
  });

  test('should return The age must be an integer.', () => {
    expect(integer({
        value: 25.5,
        label: 'age',
      }),).toBe('The age must be an integer.');
  });

  test('should return false', () => {
    expect(integer({
        value: 21,
        label: 'age',
      }),).toBe(false);
  });
});
