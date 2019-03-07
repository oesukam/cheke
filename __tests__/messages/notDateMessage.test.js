const notDate = require('../../src/messages/notDateMessage');

describe('not-a-date-message', () => {
  test('should return The birtDate is not a valid date.', () => {
    expect(notDate('birthDate')).toBe('The birthDate is not a valid date.');
  });
});
