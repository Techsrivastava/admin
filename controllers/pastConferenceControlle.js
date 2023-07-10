// controllers/pastConferenceController.js

const PastConference = require('../models/pastConferenceModel');

exports.getAllPastConferences = (req, res) => {
  const pastConferences = PastConference.getAllPastConferences();
  res.json(pastConferences);
};

exports.addPastConference = (req, res) => {
  const { name, venue, date, details } = req.body;
  const conference = new PastConference(name, venue, date, details);
  PastConference.addPastConference(conference);
  res.status(201).json(conference);
};

exports.markConferenceAsUpcoming = (req, res) => {
  const { index } = req.params;
  PastConference.markConferenceAsUpcoming(index);
  res.json({ message: 'Conference marked as upcoming.' });
};
