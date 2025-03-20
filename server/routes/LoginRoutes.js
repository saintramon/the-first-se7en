const express = require('express');
const router = express.Router();
const controller = require('../controllers/LoginController');

router.get('/', controller.index);
router.post('/', controller.validateUser);

module.exports = router;