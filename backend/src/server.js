const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 5000;

console.log('Starting server...');
console.log('PORT from env:', PORT);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
