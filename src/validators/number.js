const numberMessage = require('../messages/notNumberMessage');

module.exports = ({ value, label } = {}) => {
  if (typeof value === 'number') return false;
  return numberMessage(label);
};
