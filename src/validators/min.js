const minNumberMessage = require('../messages/belowMinNumberMessage');
const minStringMessage = require('../messages/belowMinStringMessage');

module.exports = ({ value = '', label, maxOrMin } = {}) => {
  if (
    (typeof value === 'string' && value.length >= maxOrMin) ||
    (typeof value === 'number' && value >= maxOrMin)
  ) {
    return false;
  }

  if (typeof value === 'number') return minNumberMessage(label, maxOrMin);
  return minStringMessage(label, maxOrMin);
};
