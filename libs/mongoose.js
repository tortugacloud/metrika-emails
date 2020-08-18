const mongoose = require('mongoose');
const {
  mongoose: { uri },
} = require('../config');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  mongoose,
  Schema: mongoose.Schema,
  model: mongoose.model,
};
