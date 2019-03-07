const notUUID = require('../../src/messages/notUUIDMessage');

describe('not-a-date-message', () => {
  test('should return The userId is not a valid UUID.', () => {
    expect(notUUID('userId')).toBe('The userId is not a valid UUID.');
  });
});
