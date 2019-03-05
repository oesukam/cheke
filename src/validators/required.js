const requiredMessage = require("../messages/requiredMessage");

module.exports = (input, label) => {
  if (input) return false;
  return requiredMessage(label);
};
