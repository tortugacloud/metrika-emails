const { model, Schema } = require('../libs/mongoose');

//  transitions on site

const OpenEmailSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const UnsubscribeListSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const TransitionListSchena = new Schema({
  email: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {
  OpenEmail: model('OpenEmail', OpenEmailSchema),
  UnsubscribeList: model('UnsubscribeList', UnsubscribeListSchema),
  TransitionList: model('TransitionList', TransitionListSchena),
};
