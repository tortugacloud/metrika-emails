const { validationResult } = require('express-validator');
const path = require('path');
const { OpenEmail } = require('../Email');

module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length) return next(errors);

    const {
      query: { email },
    } = req;

    await OpenEmail.create({
      email,
    });

    res.sendFile(path.join(__dirname, 'pixel.png'));
  } catch (e) {
    next(e);
  }
};
