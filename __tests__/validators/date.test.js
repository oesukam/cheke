const date = require('../../src/validators/date');

describe('date-validator', () => {
  test('should return The undefined is not a valid date.', () => {
    expect(date()).toBe('The undefined is not a valid date.');
  });

  test('should return The birthDate is not a valid date.', () => {
    expect(date({
        value: 'date',
        label: 'birthDate',
      }),).toBe('The birthDate is not a valid date.');
  });

  test('should return The birthDate is not a valid date.', () => {
    expect(date({
        value: 21,
        label: 'birthDate',
      }),).toBe('The birthDate is not a valid date.');
  });

  test('should return false', () => {
    expect(date({
        value: '2019-01-07',
        label: 'birthDate',
      }),).toBe(false);
  });
});
