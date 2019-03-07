const notDateMessage = require('../messages/notDateMessage');

module.exports = ({ value, label } = {}) => (Date.parse(value) ? false : notDateMessage(label));
