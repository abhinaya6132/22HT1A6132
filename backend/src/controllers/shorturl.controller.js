const urls = require('../models/shorturl.model');
const generateShortCode = require('../utils/shortcode.generator');
const { isValidUrl } = require('../utils/validator');

// Create short URL
exports.createShortUrl = (req, res, next) => {
  try {
    const { url, validity = 30, shortcode } = req.body;

    if (!url || !isValidUrl(url)) {
      return res.status(400).json({ success: false, error: 'Invalid URL' });
    }

    let code = shortcode || generateShortCode();
    if (urls[code]) {
      return res.status(409).json({ success: false, error: 'Shortcode already exists' });
    }

    const expiry = new Date(Date.now() + validity * 60000);
    urls[code] = {
      originalUrl: url,
      shortcode: code,
      expiry,
      createdAt: new Date(),
      clicks: []
    };

    res.status(201).json({
      shortLink: `http://localhost:5000/shorturls/r/${code}`,
      expiry
    });
  } catch (err) {
    next(err);
  }
};

// Redirect to original URL
exports.redirectShortUrl = (req, res, next) => {
  try {
    const { shortcode } = req.params;
    const record = urls[shortcode];

    if (!record) return res.status(404).json({ success: false, error: 'Shortcode not found' });
    if (record.expiry < new Date()) return res.status(410).json({ success: false, error: 'Shortcode expired' });

    // Track click
    record.clicks.push({
      timestamp: new Date(),
      referrer: req.get('Referrer') || 'direct',
      geo: req.ip
    });

    res.redirect(record.originalUrl);
  } catch (err) {
    next(err);
  }
};

// Get statistics
exports.getShortUrlStats = (req, res, next) => {
  try {
    const { shortcode } = req.params;
    const record = urls[shortcode];

    if (!record) return res.status(404).json({ success: false, error: 'Shortcode not found' });

    res.json(record);
  } catch (err) {
    next(err);
  }
};
