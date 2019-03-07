const regx = require('../../src/validators/regx');

const regxPassword = '^([A-Za-z]){8,}$'; // eslint-disable-line no-useless-escape

describe('regx-validator', () => {
  test('should return The password format is invalid.', () => {
    expect(regx({
        value: 'passwor',
        label: 'password',
        valid: regxPassword,
      }),).toBe('The password format is invalid.');
  });

  test('should return The password format is invalid.', () => {
    expect(regx({
        value: 'passwor1',
        label: 'password',
        valid: regxPassword,
      }),).toBe('The password format is invalid.');
  });

  test('should return false for empty value and regx.', () => {
    expect(regx()).toBe(false);
  });

  test('should return false when the value is correct', () => {
    expect(regx({
        value: 'password',
        label: 'password',
        valid: regxPassword,
      }),).toBe(false);
  });
});
