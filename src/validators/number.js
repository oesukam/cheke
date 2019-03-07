const numberMessage = require('../messages/notNumberMessage');

module.exports = ({ value, label } = {}) =>
  typeof value === 'number' ? false : numberMessage(label);
