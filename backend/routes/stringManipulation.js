const express = require('express');
const router = express.Router();
const stringManipulationService = require('../services/stringManipulationService');

router.get('/check-palindrome', stringManipulationService.checkPalindrome);
router.get('/lowercase', stringManipulationService.toLowercase);
router.get('/uppercase', stringManipulationService.toUppercase);

module.exports = router;