const validators = require('./validators');
const notAllowedMessage = require('./messages/notAllowedMessage');
const { getRules } = require('./helpers');

const valids = Object.keys(validators);
/**
 *
 * @param {Object} data
 * @param {Object} reqRules - User validation rules
 * @param {String} path - Tha path of the request to be validated
 * @returns {Promise} - Success or failed object
 */
const hasErrors = ({ data = {}, reqRules, path } = {}) =>
  new Promise((resolve, reject) => {
    if (!reqRules) resolve(false);
    const dataRules = { ...data, ...reqRules };
    Object.keys(dataRules).forEach(key => {
      if (
        reqRules[key] === undefined ||
        (typeof reqRules[key] === 'object' && reqRules[key].type === undefined)
      ) {
        resolve({
          [key]: {
            path,
            message: notAllowedMessage(key),
          },
        });
      }
      if (!reqRules[key] || (typeof reqRules[key] === 'object' && !reqRules[key].type)) {
        reject(Error(`${key}'s rule can not be empty`));
      }
      const rules = getRules(reqRules[key]);
      Object.keys(rules).forEach(k => {
        const [rule, valid] = rules[k].split(':');

        if (valids.indexOf(rule) === -1) {
          resolve({ [key]: { path, message: `${rule} rule does not exist` } });
        }

        if (typeof data[key] === 'undefined' && rules.indexOf('required') !== -1) {
          resolve({
            [key]: {
              path,
              message: validators.required({
                value: data[key],
                label: typeof reqRules[key] === 'object' ? reqRules[key].label || key : key,
              }),
            },
          });
        }

        if (typeof data[key] === 'undefined') resolve(false);

        if (typeof data[key] !== 'undefined') {
          const failed = validators[rule]({
            value: data[key],
            label: typeof reqRules[key] === 'object' ? reqRules[key].label || key : key,
            valid,
            path,
            isNumber: rules.indexOf('number') || rules.indexOf('integer'),
            isRequired: rules.indexOf('required') !== -1,
          });
          if (failed) resolve({ [key]: { path, message: failed } });
        }
      });
    });
    resolve(false);
  });

module.exports = hasErrors;
