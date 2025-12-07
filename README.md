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



1️ Project Title
SatKart – E-commerce Backend API

2️ Project Overview
SatKart is a modern E-commerce Backend System designed to handle all core functionalities of an online shopping platform.
 It focuses on efficient CRUD operations, API development, and database management with essential features like searching, sorting, filtering, and pagination.
The goal is to create a robust and scalable backend that can later be integrated with a frontend or mobile app interface.

3️ Objectives
Develop RESTful APIs for managing products, users, and orders.


Implement CRUD operations with secure authentication (JWT).


Enable advanced product searching, sorting, and filtering.


Add pagination for large product datasets.


Integrate a relational database using MySQL.


Ensure clean code structure, documentation, and scalability.



4️ Proposed Tech Stack
Layer
Technology
Backend Framework
Node.js + Express.js
Database
MySQL
ORM
Prisma ORM
Authentication
JSON Web Token (JWT)








Version Control
Git + GitHub


5️ Core Features
User Management – Register, Login, Update.


Product Management – Add, Update, Delete, View Products.


Order System – Create orders.


Search, Sort, and Filter – Based on price, category, and name.


Pagination – Efficiently load large datasets.


Authentication & Authorization – Secure API endpoints using JWT.



6️ Expected Outcomes
A fully functional backend API for an e-commerce platform.


Optimized and secure database operations.


Clean, modular, and scalable backend structure ready for frontend integration.



7️ Future Enhancements
Payment Gateway Integration (Stripe / Razorpay)


Product Reviews & Ratings


Product Image Uploads (Cloudinary)





