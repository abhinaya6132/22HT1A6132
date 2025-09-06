const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, '../../logs/backend.log');

const loggingMiddleware = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} | ${req.method} ${req.originalUrl} | IP: ${req.ip}\n`;
  
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Logging failed:', err);
  });

  next();
};

module.exports = loggingMiddleware;



