const { validationResult } = require('express-validator');
const { UnsubscribeList } = require('../models/Email');

module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length) return next(errors);

    const {
      query: { email },
    } = req;

    await UnsubscribeList.create({
      email,
    });

    res.status(200).json({
      status: '200',
      message: 'You have successfully unsubscribed from the mailing list',
    });
  } catch (e) {
    next(e);
  }
};
