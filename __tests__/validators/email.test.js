const email = require('../../src/validators/email');

describe('email-validator', () => {
  test('should return The undefined must be a valid email address.', () => {
    expect(email()).toBe('The undefined must be a valid email address.');
  });

  test('should return The email must be a valid email address.', () => {
    expect(email({
        value: 'not a number',
        label: 'email',
      }),).toBe('The email must be a valid email address.');
  });

  test('should return The email must be a valid email address.', () => {
    expect(email({
        value: 21,
        label: 'email',
      }),).toBe('The email must be a valid email address.');
  });

  test('should return false', () => {
    expect(email({
        value: 'email@email.com',
        label: 'email',
      }),).toBe(false);
  });
});
