const hasErrors = require('./hasErrors');

const requests = ['params', 'body', 'query'];
const cheke = ({ errors = 'errors', ...args }) => async (req, res, next) => {
  if (typeof errors !== 'string') throw Error('errors should be a string');
  let failed;
  await new Promise(resolve => {
    requests.forEach(async value => {
      if (failed) return;
      if (args[value]) {
        failed = await hasErrors({
          data: req[value],
          reqRules: args[value],
          path: value,
        });
        resolve();
      }
    });
  });

  if (failed) {
    return res.status(400).json({ [errors]: failed });
  }
  return next();
};

module.exports = cheke;
