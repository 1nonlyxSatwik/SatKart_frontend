SatKart is a modern, full-stack e-commerce application built with React, offering a smooth and intuitive shopping experience.
This frontend interacts with the SatKart backend API to provide:

User authentication

Product browsing

Cart management

Order checkout

Responsive & optimized UI

🌐 Live Demo

Frontend:
👉 https://sat-kart-frontend-5ver.vercel.app

Backend API:
👉 https://satkart-backend-3.onrender.com

🛠️ Tech Stack

Frontend

React.js (Create React App)

React Router

Context API / State Management

CSS for custom responsive UI

Axios for API communication

Vercel for deployment

Backend (connected)

Node.js / Express

MongoDB Atlas (Cloud Database)

Authentication (JWT)

Hosted on Render

📦 Features

🔐 User Login & Signup

🛍️ Browse Products

🛒 Add to Cart / Remove from Cart

💳 Checkout Process

📱 Responsive UI

⚡ Fast API communication with backend

🌑 Clean code + scalable folder structure

📁 Project Structure
SatKart_frontend/
 ├── public/
 ├── src/
 │   ├── Components/
 │   ├── Context/
 │   ├── Pages/
 │   ├── App.js
 │   ├── index.js
 │   ├── config.js   <-- Backend URL defined here
 │   └── ...
 ├── package.json
 ├── README.md
 └── vercel.json     <-- Required for SPA routing on Vercel

⚙️ Environment Variables

Create a .env file (not committed to GitHub):

REACT_APP_BACKEND_URL=https://satkart-backend-3.onrender.com


Or set it directly in Vercel → Environment Variables.

🧪 Running Locally
1️⃣ Clone the repo
git clone https://github.com/1nonlyxSatwik/SatKart_frontend.git
cd SatKart_frontend

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm start


App runs on:

http://localhost:3000

🚀 Deployment

Frontend is deployed on Vercel.

SPA routing fixed using:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

🤝 Backend Repo Link

If you want to check the backend code:

👉 https://github.com/1nonlyxSatwik/SatKart_backend

⭐ Show Support

If you like the project, give it a ⭐ on GitHub — it helps a lot.

🧑‍💻 Author

Satwik Mani Tripathi
Full-stack Developer & Student
Building modern web experiences.
