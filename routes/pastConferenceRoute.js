// routes/pastConferenceRoutes.js

const express = require('express');
const router = express.Router();
const pastConferenceController = require('../controllers/pastConferenceControlle');


router.get('/', pastConferenceController.getAllPastConferences);
router.post('/', pastConferenceController.addPastConference);
router.put('/:index/upcoming', pastConferenceController.markConferenceAsUpcoming);

module.exports = router;
