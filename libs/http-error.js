const http = require('http');

class HttpError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message || http.STATUS_CODES[status] || ' Unrecognized error';
  }
}

module.exports = HttpError;
