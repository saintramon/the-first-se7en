const express = require('express');

const router = express.Router();

const bonusQuestModel = require('../models/BonusQuestModel')

// When someone succesfully logs in get xp
router.get('/', (req, res) => {

});

// Submit answers
router.post('/submit', (req, res) => {
    
})


module.exports = router;