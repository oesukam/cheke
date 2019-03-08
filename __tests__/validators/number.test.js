const number = require('../../src/validators/number');

describe('number-validator', () => {
  test('should return The undefined must be a number.', () => {
    expect(number()).toBe('The undefined must be a number.');
  });

  test('should return The age must be a number.', () => {
    expect(number({
        value: 'not a number',
        label: 'age',
      }),).toBe('The age must be a number.');
  });

  test('should return The age must be a number.', () => {
    expect(number({
        value: '21',
        label: 'age',
      }),).toBe('The age must be a number.');
  });

  test('should return false', () => {
    expect(number({
        value: '21p',
        label: 'age',
        path: 'query',
      }),).toBe('The age must be a number.');
  });

  test('should return false', () => {
    expect(number({
        value: '21',
        label: 'age',
        path: 'params',
      }),).toBe(false);
  });

  test('should return false', () => {
    expect(number({
        value: 21,
        label: 'age',
      }),).toBe(false);
  });
});
