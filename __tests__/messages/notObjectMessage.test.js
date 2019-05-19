const notObject = require('../../src/messages/notObjectMessage');

describe('not-an-object-message', () => {
  test('should return `user must be an object.`', () => {
    expect(notObject('user')).toBe('user must be an object.');
  });
});
