const integerMessage = require('../messages/notIntegerMessage');

module.exports = ({ value, label } = {}) =>
  Number.isInteger(value) ? false : integerMessage(label);
