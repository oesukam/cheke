const uuid = require('../../src/validators/uuid');

describe('date-validator', () => {
  test('should return The undefined is not a validUUID.', () => {
    expect(uuid()).toBe('The undefined is not a validUUID.');
  });

  test('should return The userId is not a validUUID.', () => {
    expect(uuid({
        value: 'date',
        label: 'userId',
      }),).toBe('The userId is not a validUUID.');
  });

  test('should return The userId is not a validUUID.', () => {
    expect(uuid({
        value: 21,
        label: 'userId',
      }),).toBe('The userId is not a validUUID.');
  });

  test('should return false', () => {
    expect(uuid({
        value: '8320ceae-987e-464e-abbd-df0315be4623',
        label: 'userId',
      }),).toBe(false);
  });
});
