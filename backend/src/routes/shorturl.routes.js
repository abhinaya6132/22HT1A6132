const express = require('express');
const router = express.Router();
const { createShortUrl, redirectShortUrl, getShortUrlStats } = require('../controllers/shorturl.controller');

router.post('/', createShortUrl);
router.get('/r/:shortcode', redirectShortUrl);
router.get('/:shortcode', getShortUrlStats);

module.exports = router;
