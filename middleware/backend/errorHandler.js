const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log error to console
  console.error(`${new Date().toISOString()} | ERROR | ${req.method} ${req.originalUrl} | ${message}`);

  // Send JSON response
  res.status(statusCode).json({
    success: false,
    error: message
  });
};

module.exports = errorHandler;
