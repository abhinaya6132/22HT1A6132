ervice

This project implements a **HTTP URL Shortener Microservice** with a **React frontend** and **Node.js/Express backend**. It supports generating short URLs, redirecting users, and viewing usage statistics. 

The project includes **mandatory logging middleware**, error handling, and a user-friendly frontend.

---

## **Folder Structure**

url-shortener-project/
├── backend/
├── frontend/
├── middleware/
└── README.md

markdown
Copy code

**Backend** handles API requests and database operations.  
**Frontend** provides a React UI for URL shortening and statistics.  
**Middleware** contains logging and error-handling code for both frontend and backend.

---

## **Backend**

**Folder:** `backend/`

### **Technologies**
- Node.js
- Express.js
- MongoDB (Mongoose)
- UUID for shortcode generation
- dotenv for environment variables
- Nodemon for development

### **Setup**
1. Navigate to the backend folder:
```bash
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file (example):

ini
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/url_shortener_db
Start the backend server:

bash
Copy code
npm run dev
The backend runs on http://localhost:5000.

Frontend
Folder: frontend/

Technologies
React.js

Material UI

Axios

React Router

Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend app:

bash
Copy code
npm start
The frontend runs on http://localhost:3000.

API Endpoints
1. Create Short URL
Method: POST

URL: /shorturls

Body:

json
Copy code
{
  "url": "https://example.com/very-long-url",
  "validity": 30,
  "shortcode": "abcd12"
}
Response (201):

json
Copy code
{
  "shortLink": "http://localhost:5000/r/abcd12",
  "expiry": "2025-01-01T00:30:00Z"
}
2. Get Short URL Statistics
Method: GET

URL: /shorturls/:shortcode

Response:

json
Copy code
{
  "originalUrl": "https://example.com/very-long-url",
  "shortcode": "abcd12",
  "expiry": "2025-01-01T00:30:00Z",
  "clicks": [
    { "timestamp": "2025-01-01T00:10:00Z", "referrer": "direct", "geo": "unknown" }
  ],
  "createdAt": "2025-01-01T00:00:00Z"
}
3. Redirect to Original URL
Method: GET

URL: /shorturls/r/:shortcode

Redirects the user to the original URL if the shortcode exists and is not expired.

Middleware
Backend
logging.middleware.js – Logs all API requests to logs/backend.log

errorhandler.js – Handles API errors and sends JSON responses

Frontend
logging.middleware.js – Logs frontend actions to console

errorhandler.js – Catches frontend errors and displays alerts

Frontend Pages
1. URL Shortener Page
Allows shortening up to 5 URLs at a time

Optional validity (minutes) and custom shortcode

Displays short URLs with expiry

2. URL Statistics Page
Fetches statistics for a given shortcode

Shows original URL, creation date, expiry date

Shows clicks, referrer, timestamp, and geo info

Usage
Start the backend server:

bash
Copy code
cd backend
npm run dev
Start the frontend app:

bash
Copy code
cd frontend
npm start
Open http://localhost:3000 in your browser.

Use the URL Shortener page to shorten URLs.

Use the Statistics page to view click analytics.