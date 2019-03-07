const boolean = require('../../src/validators/boolean');

describe('string-validator', () => {
  test('should return The undefined must be a boolean.', () => {
    expect(boolean()).toBe('The undefined must be a boolean.');
  });

  test('should return The confirmed must be a boolean.', () => {
    expect(boolean({
        value: 21,
        label: 'confirmed',
      }),).toBe('The confirmed must be a boolean.');
  });

  test('should return The confirmed must be a boolean.', () => {
    expect(boolean({
        value: undefined,
        label: 'confirmed',
      }),).toBe('The confirmed must be a boolean.');
  });

  test('should return false', () => {
    expect(boolean({
        value: true,
        label: 'confirmed',
      }),).toBe(false);
  });
});
