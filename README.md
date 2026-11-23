Shortly – URL Shortener 🚀

Shortly is a full-stack URL Shortener application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to convert long URLs into short, shareable links and track how many times each shortened URL has been clicked.

✨ Features

URL Shortening: Convert long URLs into short, easy-to-share links.

Click Tracking: Track the total number of clicks on each shortened URL.

URL Management: View and manage all your shortened URLs.

Delete Short URLs: Delete shortened URLs that are no longer needed.

Redirection: Automatically redirect users to the original URL when they visit a shortened link.

Responsive UI: Clean and user-friendly interface for a smooth experience.

🛠️ Tech Stack

Frontend

React.js

JavaScript

Tailwind CSS / CSS

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose
⚙️ Installation & Setup

Follow these steps to run Shortly locally.

1. Clone the Repository

git clone <your-repository-url>
cd Shortly

2. Backend Setup

cd backend
npm install

Create a .env file inside the backend directory:

PORT=3000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000

Start the backend server:

npm run dev

3. Frontend Setup

Open another terminal:

cd frontend
npm install
npm run dev

The frontend will typically run at:

http://localhost:5173
