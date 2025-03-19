const express = require('express');
const router = express.Router();
const { signUpController } = require('../controllers/SignupController'); 

router.post('/submit', signUpController); 

module.exports = router; 
