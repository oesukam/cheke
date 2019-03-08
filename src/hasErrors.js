const validators = require('./validators');
const notAllowedMessage = require('./messages/notAllowedMessage');

const valids = Object.keys(validators);

const hasErrors = ({ data = {}, reqRules, path } = {}) =>
  new Promise((resolve, reject) => {
    if (!reqRules) resolve(false);
    const dataRules = { ...data, ...reqRules };
    Object.keys(dataRules).forEach(key => {
      if (reqRules[key] === undefined) {
        resolve({
          [key]: {
            path,
            message: notAllowedMessage(key),
          },
        });
      }
      if (!reqRules[key] && reqRules[key] !== undefined) {
        reject(Error(`${key}'s rule can not be empty`));
      }
      const rules = reqRules[key].split('|').map(rule => rule.trim());
      Object.keys(rules).forEach(k => {
        const [rule, valid] = rules[k].split(':');
        if (valids.indexOf(rule) === -1) {
          resolve({ [key]: { path, message: `${rule} rule does not exist` } });
        }
        if (!data[key] && rules.indexOf('required') !== -1) {
          resolve({
            [key]: {
              path,
              message: validators.required({
                value: data[key],
                label: key,
              }),
            },
          });
        }

        const failed = validators[rule]({
          value: data[key],
          label: key,
          valid,
        });
        if (failed) resolve({ [key]: { path, message: failed } });
      });
    });
    resolve(false);
  });

module.exports = hasErrors;
