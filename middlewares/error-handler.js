const HttpError = require('../libs/http-error');

module.exports = (error, req, res, next) => {
  if (typeof error === 'number') {
    error = new HttpError(error);
  }

  if (error instanceof HttpError) {
    const { status, message } = error;
    res.sendStatus(status).json({ message });
  }

  if (Array.isArray(error)) {
    error = {
      status: 400,
      message: error,
    };
  }

  // eslint-disable-next-line no-console
  console.log(error);

  res.status(error.status || 500).json({
    status: error.status,
    message: error.message,
  });
};
