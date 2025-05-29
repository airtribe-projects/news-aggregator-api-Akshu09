const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const verifyToken = require('../middleware/auth');

router.get('/news', verifyToken, newsController.getNews);

module.exports = router;


