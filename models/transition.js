const { validationResult } = require('express-validator');
const { TransitionList } = require('../models/Email');

module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length) return next(errors);

    const {
      query: { email, url },
    } = req;

    await TransitionList.create({
      email,
      url,
    });

    res.redirect(url);
  } catch (e) {
    next(e);
  }
};
