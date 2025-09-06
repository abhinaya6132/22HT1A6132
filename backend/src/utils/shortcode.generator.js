const { v4: uuidv4 } = require('uuid');

const generateShortCode = () => {
  return uuidv4().slice(0, 6); // short unique code
};

module.exports = generateShortCode;
