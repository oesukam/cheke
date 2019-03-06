const hasErrors = require('../src/hasErrors');

describe('hasErrors', () => {
  test("should return false if you don't provide reqRules", () =>
    hasErrors().then(res => {
      expect(res).toBeFalsy();
    }));

  test("should return name's rule can not be empty", () =>
    hasErrors({ reqRules: { name: '' } }).catch(err => {
      expect(err.message).toBe("name's rule can not be empty");
    }));

  test('should return The age must be a number', () =>
    hasErrors({
      data: { age: '21' },
      reqRules: { age: 'number' },
    }).then(res => {
      expect(res.age).toBe('The age must be a number.');
    }));

  test('should return The name field is required.', () =>
    hasErrors({ reqRules: { name: 'required' } }).then(res => {
      expect(res.name).toBe('The name field is required.');
    }));
});
