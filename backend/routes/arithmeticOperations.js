const express = require('express');
const router = express.Router();
const arithmeticOperations = require('../services/arithmeticOperationsService');

router.get('/addition', arithmeticOperations.performAddition);
router.get('/subtraction', arithmeticOperations.performSubtraction);
router.get('/multiplication', arithmeticOperations.performMultiplication);
router.get('/division', arithmeticOperations.performDivision);

module.exports = router;