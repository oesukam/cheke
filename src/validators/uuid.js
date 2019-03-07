const notUUIDMessage = require('../messages/notUUIDMessage');

const regx = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; // eslint-disable-line no-useless-escape
module.exports = ({ value, label } = {}) => (regx.test(value) ? false : notUUIDMessage(label));
