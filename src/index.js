const hasErrors = require('./hasErrors');

const requests = ['params', 'body', 'query'];
const cheke = (args = { errors: 'errors' }) => async (req, res, next) => {
  if (typeof errors !== 'string') throw Error('errors should be a string');
  if (args.errors) throw Error('errors should be a string');

  requests.forEach(async value => {
    if (args[value]) {
      const failed = await hasErrors({
        data: req[value],
        reqRules: args[value],
      });
      if (failed) {
        return res.status(400).json({ [args.arrors]: failed });
      }
    }
  });
  return next();
};

module.exports = cheke;
