const maxNumberMessage = require('../messages/aboveMaxNumberMessage');
const maxStringMessage = require('../messages/aboveMaxStringMessage');

module.exports = ({ value = '', label, maxOrMin } = {}) => {
  if (
    (typeof value === 'string' && value.length <= maxOrMin) ||
    (typeof value === 'number' && value <= maxOrMin)
  ) {
    return false;
  }

  if (typeof value === 'number') return maxNumberMessage(label, maxOrMin);
  return maxStringMessage(label, maxOrMin);
};
