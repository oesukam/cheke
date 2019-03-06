const notStringMessage = require('../messages/notStringMessage');

module.exports = (input, label) => {
  if (typeof input === 'string') return false;
  return notStringMessage(label);
};
