const hasErrors = require('./hasErrors');

const requests = ['params', 'body', 'query'];
const cheke = (args = { errors: 'errors' }) => async (req, res, next) => {
  if (typeof args.errors !== 'string') throw Error('errors should be a string');
  let failed;
  for (const value of requests) {
    if (args[value]) {
      failed = await hasErrors({
        data: req[value],
        reqRules: args[value],
        path: value,
      });
    }
  }
  if (failed) {
    return res.status(400).json({ [args.arrors]: failed });
  }
  return next();
};

module.exports = cheke;
