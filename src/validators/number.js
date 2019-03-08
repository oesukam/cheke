const numberMessage = require('../messages/notNumberMessage');

module.exports = ({ value, label, path } = {}) => {
  if (path === 'query' || path === 'params') {
    return !Number.isNaN(Number(value)) ? false : numberMessage(label);
  }
  return typeof value === 'number' ? false : numberMessage(label);
};
