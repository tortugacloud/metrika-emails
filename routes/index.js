const { query } = require('express-validator');
const getPixel = require('../models/get-pixel');
const unsubscribe = require('../models/unsubscribe');
const transition = require('../models/transition');

module.exports = (app) => {
  app.get(
    '/pixel',
    [query('email', 'Required params').isEmail().withMessage('Param email must be a email')],
    getPixel,
  );

  app.get(
    '/unsubscribe',
    [query('email', 'Required params').isEmail().withMessage('Param email must be a email')],
    unsubscribe,
  );

  app.get(
    '/jump',
    [query('email', 'Required params').isEmail().withMessage('Param email must be a email')],
    [
      query('url', 'Required params')
        .isURL({
          protocols: ['https', 'http'],
        })
        .withMessage('Param url must be a url, example link http or https://example.com'),
    ],
    transition,
  );
};
