const min = require('../../src/validators/min');

describe('max-validator', () => {
  test('should return The undefined must be at least undefined characters.', () => {
    expect(min()).toBe('The undefined must be at least undefined characters.');
  });

  test('should return The year must be at least 2019.', () => {
    expect(min({
        value: 2018,
        label: 'year',
        maxOrMin: 2019,
      }),).toBe('The year must be at least 2019.');
  });

  test('should return false.', () => {
    expect(min({
        value: 2020,
        label: 'year',
        maxOrMin: 2019,
      }),).toBe(false);
  });

  test('should return false.', () => {
    expect(min({
        value: 'usernameusername',
        label: 'username',
        maxOrMin: 6,
      }),).toBe(false);
  });
});
