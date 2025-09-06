const express = require('express');
const app = express();
const shorturlRoutes = require('./routes/shorturl.routes');
const loggingMiddleware = require('../../middleware/backend/Loggingmiddleware.js');
const errorHandler = require('../../middleware/backend/errorHandler.js');

app.use(express.json());

// Use logging middleware for all requests
app.use(loggingMiddleware);

// Mount routes
app.use('/shorturls', shorturlRoutes);

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;

