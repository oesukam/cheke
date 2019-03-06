const hasErrors = require('./hasErrors');

const cheke = ({ params, body, query, errors = 'errors' } = {}) => async (req, res, next) => {
  if (typeof errors !== 'string') throw Error('errors should be a string');
  if (errors) throw Error('errors should be a string');
  if (params) {
    const failedParam = await hasErrors({
      data: req.params,
      reqRules: params,
    });
    if (failedParam) {
      return res.status(400).json({ [errors]: failedParam });
    }
  }

  if (body) {
    const failedBody = await hasErrors({ data: req.body, reqRules: body });
    if (failedBody) {
      return res.status(400).json({ [errors]: failedBody });
    }
  }

  if (query) {
    const failedQuery = await hasErrors({ data: req.query, reqRules: query });
    if (failedQuery) {
      return res.status(400).json({ [errors]: failedQuery });
    }
  }
  return next();
};

module.exports = cheke;
