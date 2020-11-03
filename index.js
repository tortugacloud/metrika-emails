const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const errorHandler = require('./middlewares/error-handler');
const { NODE_ENV, PORT } = process.env;

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

if (NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

require('./routes')(app);

app.get('/', (req, res) => res.send('ok'));

app.all('/*', (req, res, next) => next(404));

app.use(errorHandler);

app.listen(PORT || 5000);
