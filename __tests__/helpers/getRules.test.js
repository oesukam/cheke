const { getRules } = require('../../src/helpers');

describe('getRules()', () => {
  test('should return an array`', () => {
    expect(getRules('required')).toBeDefined();
  });
});

describe('getRules()', () => {
  test('should return an array`', () => {
    expect(getRules({ type: 'required' })).toBeDefined();
  });
});
