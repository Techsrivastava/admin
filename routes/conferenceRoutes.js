// routes/conferenceRoutes.js
const express = require('express');
const conferenceController = require('../controllers/conferenceController');

const router = express.Router();

router.post('/', conferenceController.createConference);
router.get('/', conferenceController.getAllConferences);
router.get('/:id', conferenceController.getConference);
router.put('/:id', conferenceController.updateConference);
router.delete('/:id', conferenceController.deleteConference);

module.exports = router;
