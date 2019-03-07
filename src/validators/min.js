const minNumberMessage = require('../messages/belowMinNumberMessage');
const minStringMessage = require('../messages/belowMinStringMessage');

module.exports = ({ value = '', label, valid } = {}) => {
  if (
    (typeof value === 'string' && value.length >= valid) ||
    (typeof value === 'number' && value >= valid)
  ) {
    return false;
  }

  if (typeof value === 'number') return minNumberMessage(label, valid);
  return minStringMessage(label, valid);
};
