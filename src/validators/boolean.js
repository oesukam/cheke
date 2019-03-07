const notStringMessage = require('../messages/notBooleanMessage');

module.exports = ({ value, label } = {}) =>
  typeof value === 'boolean' ? false : notStringMessage(label);
