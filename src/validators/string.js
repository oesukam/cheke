const notStringMessage = require('../messages/notStringMessage');

module.exports = ({ value, label } = {}) => {
  if (typeof value === 'string' &&  value.trim()) return false;
  return notStringMessage(label);
};
