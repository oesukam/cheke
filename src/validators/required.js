const requiredMessage = require('../messages/requiredMessage');

module.exports = ({ value, label } = {}) => {
  if (value) return false;
  return requiredMessage(label);
};
