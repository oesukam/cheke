const numberMessage = require('../messages/notNumberMessage');

module.exports = (input, label) => {
  if (typeof input === 'number') return false;
  return numberMessage(label);
};
