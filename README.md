# E-COMMERCE
A full-stack e-commerce application built with React, Express.js, and MongoDB.
Browse products, manage your shopping cart, place orders, and make secure purchases with user authentication and an admin dashboard for managing products and orders.

## 🚀 Features
**Product Management** : Browse, search, and filter products by category, price, or name.  
**User Authentication** : Secure signup and login system using JWT-based authentication.  
**Shopping Cart** : Add, update, and remove products from your cart seamlessly.  
**Order Placement** : Place and manage orders with order history tracking.  
**Admin Dashboard** : Admins can add, edit, or delete products and view all user orders.  
**Image Upload** : Product images stored securely using Cloudinary.  
**Authorization** : Protected routes for both users and admins.  
**Responsive Design** : Optimized UI for both desktop and mobile devices.  
**Contact Form** : Users can send inquiries directly via the contact page.  
**Notifications** : Real-time toast alerts for user actions (add to cart, login, checkout, etc.).  

# 🛠️ Tech Stack

## Frontend

**React 19** – Modern JavaScript library for building interactive UIs  
**Vite** – Next-generation build tool and fast development server  
**TailwindCSS 4** – Utility-first CSS framework for responsive design  
**Axios** – Promise-based HTTP client for API communication  
**React Toastify** – Beautiful and customizable toast notifications  
**React Router DOM** – Client-side routing for smooth navigation  
**Context API** – Global state management for cart and user data  

## Backend
**Node.js** – JavaScript runtime for server-side logic  
**Express.js 5** – Minimal and flexible web framework  
**MongoDB** – NoSQL database for scalable data storage  
**Mongoose** – Elegant MongoDB object modeling for Node.js  
**JWT (JSON Web Token)** – Secure authentication and route protection  
**bcrypt** – Password hashing for user security  
**Cloudinary** – Cloud-based image storage and optimization  
**Multer** – Middleware for handling image uploads  
**CORS** – Enable secure cross-origin resource sharing  
**dotenv** – Environment variable management  

## 🧱 Project Structure

    E-COMMERCE/  
    ├── backend/                           # Server-side application  
    │   ├── server.js                      # Entry point for backend (Express server setup)  
    │   ├── config/                        # Database and app configuration
    │   ├── controllers/                   # Route controllers  
    │   ├── middleware/                    # Middleware for request handling  
    │   ├── models/                        # MongoDB schema definitions   
    │   ├── routes/                        # API endpoint definitions  
    │   ├── uploads/                       # Temporary file storage for uploads  
    │   └── .env                           # Environment variables (keys, DB URI, etc.)  
    │  
    ├── frontend/                          # Client-side application  
    │   ├── src/                           # React source files  
    │   │   ├── App.jsx                    # Main app component defining routes  
    │   │   ├── main.jsx                   # React entry point with router and context  
    │   │   ├── index.css                  # Global styles  
    │   │   ├── Context/                   # Global state management  
    │   │   │   └── ShopContext.jsx        # Handles cart, product, and user state  
    │   │   ├── Components/                # Reusable UI components  
    │   │   ├── Pages/                     # Page components for routes  
    │   ├── public/                        # Static assets (icons, favicon, etc.)  
    │   ├── package.json                   # Frontend dependencies and scripts  
    │   └── vite.config.js                 # Vite configuration  
    │  
    ├── .gitignore                         # Files and folders to ignore in Git  
    ├── package.json                       # Project-level dependencies and scripts  
    └── README.md                          # Project documentation  


# Getting Started
  ## Prerequisites
  **Node.js** (v18 or higher)  
  npm  
  MongoDB(local installation or MongoDB Atlas)

# Installation
