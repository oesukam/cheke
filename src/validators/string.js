const notStringMessage = require('../messages/notStringMessage');

module.exports = ({ value, label } = {}) => {
  if (typeof value === 'string') return false;
  return notStringMessage(label);
};
