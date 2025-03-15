const express = require('express');

const router = express.Router();

const questModel = require('../models/QuestModel')

// When someone enters the quest page
router.get('/', (req, res) => {

});

// When someone submit their answers
router.post('/submit', (req, res) => {

});

// When someone wants to reveal a letter
router.post('/revealLetter', (req, res) => {

});

// When someone wants to remove a letter
router.post('/removeLetter', (req, res) => {

});

module.exports = router;
