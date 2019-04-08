const maxNumberMessage = require('../messages/aboveMaxNumberMessage');
const maxStringMessage = require('../messages/aboveMaxStringMessage');

module.exports = ({ value = '', label, valid, isNumber } = {}) => {
  if (
    (typeof value === 'number' && value <= valid) ||
    (typeof value === 'string' && value.length <= valid)
  ) {
    return false;
  }

  if (typeof value === 'number' || isNumber) return maxNumberMessage(label, valid);
  return maxStringMessage(label, valid);
};
