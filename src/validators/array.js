const notArrayMessage = require('../messages/notArrayMessage');

module.exports = ({ value, label } = {}) => {
  if (value instanceof Array) return false;
  return notArrayMessage(label);
};
