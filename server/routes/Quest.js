const express = require('express');

const router = express.Router();

const QuestController = require('../controllers/QuestController');

// When someone enters the quest page
router.get('/', QuestController.index);

// When someone submits their answers
router.post('/submit', QuestController.submitAnswers);

// When someone wants to reveal a letter
router.post('/revealLetter', QuestController.revealLetter);

// When someone wants to remove a letter
router.post('/removeLetter', QuestController.removeLetter);

module.exports = router;
