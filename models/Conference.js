// models/Conference.js
const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Conference = mongoose.model('Conference', conferenceSchema);

module.exports = Conference;
