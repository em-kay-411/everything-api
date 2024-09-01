const express = require('express');
const router = express.Router();
const newsService = require('../services/newsService');


router.get('/top-headlines', newsService.getTopHeadlines);
router.get('/everything', newsService.getEverything);

module.exports = router;