const number = require('../../src/validators/number');

describe('date-validator', () => {
  test('should return The undefined is not a valid date.', () => {
    expect(number()).toBe('The undefined is not a valid date.');
  });

  test('should return The birthDate is not a valid date.', () => {
    expect(number({
        value: 'date',
        label: 'birthDate',
      }),).toBe('The birthDate is not a valid date.');
  });

  test('should return The birthDate is not a valid date.', () => {
    expect(number({
        value: 21,
        label: 'birthDate',
      }),).toBe('The birthDate is not a valid date.');
  });

  test('should return false', () => {
    expect(number({
        value: '2019-01-07',
        label: 'birthDate',
      }),).toBe(false);
  });
});
