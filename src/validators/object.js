const notObjectMessage = require('../messages/notObjectMessage');

module.exports = ({ value, label } = {}) => {
  if (value === Object(value) && !(value instanceof Array)) return false;
  return notObjectMessage(label);
};
