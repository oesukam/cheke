const regxMessage = require('../messages/notRegxFormatMessage');

module.exports = ({ value, label, valid } = {}) => {
  const regx = new RegExp(valid);
  if (regx.test(value)) return false;
  return regxMessage(label);
};
