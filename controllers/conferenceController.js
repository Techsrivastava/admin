// controllers/conferenceController.js
const Conference = require('../models/Conference');

// Create a conference
const createConference = async (req, res) => {
  try {
    const conference = await Conference.create(req.body);
    res.status(201).json(conference);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all conferences
const getAllConferences = async (req, res) => {
  try {
    const conferences = await Conference.find();
    res.json(conferences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single conference
const getConference = async (req, res) => {
  try {
    const conference = await Conference.findById(req.params.id);
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' });
    }
    res.json(conference);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a conference
const updateConference = async (req, res) => {
  try {
    const conference = await Conference.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' });
    }
    res.json(conference);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a conference
const deleteConference = async (req, res) => {
  try {
    const conference = await Conference.findByIdAndDelete(req.params.id);
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' });
    }
    res.json({ message: 'Conference deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConference,
  getAllConferences,
  getConference,
  updateConference,
  deleteConference,
};
