const getRules = rules => {
  if (typeof rules === 'object') {
    return rules.type.split('|').map(rule => rule.trim());
  }
  return rules.split('|').map(rule => rule.trim());
};

module.exports = getRules;
