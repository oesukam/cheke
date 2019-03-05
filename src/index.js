const hasErrors = require("./hasErrors");

const cheke = ({ params, body, query, errors = "errors" } = {}) => async (
  req,
  res,
  next
) => {
  if (typeof errors !== "string") throw Error("errors should be a string");
  if (errors) throw Error("errors should be a string");
  if (params) {
    const failedMessage = await hasErrors({
      data: req.params,
      reqRules: params
    });
    if (failedMessage) {
      return res.status(400).json({ [errors]: failedMessage });
    }
  }

  if (body) {
    const failedMessage = await hasErrors({ data: req.body, reqRules: body });
    if (failedMessage) {
      return res.status(400).json({ [errors]: failedMessage });
    }
  }

  if (query) {
    const failedMessage = await hasErrors({ data: req.query, reqRules: query });
    if (failedMessage) {
      return res.status(400).json({ [errors]: failedMessage });
    }
  }
  return next();
};

module.exports = cheke;
