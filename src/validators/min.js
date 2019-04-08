const minNumberMessage = require('../messages/belowMinNumberMessage');
const minStringMessage = require('../messages/belowMinStringMessage');

module.exports = ({ value = '', label, valid, isNumber } = {}) => {
  if (
    (typeof value === 'string' && value.length >= valid) ||
    (typeof value === 'number' && value >= valid)
  ) {
    return false;
  }

  if (typeof value === 'number' || isNumber) return minNumberMessage(label, valid);
  return minStringMessage(label, valid);
};
