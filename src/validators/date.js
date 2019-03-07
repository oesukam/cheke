const notDateMessage = require('../messages/notDateMessage');

module.exports = ({ value, label } = {}) => {
  if (Date.parse(value)) return false;
  return notDateMessage(label);
};
