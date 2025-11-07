# E-COMMERCE
A full-stack e-commerce application built with React, Express.js, and MongoDB.
Browse products, manage your shopping cart, place orders, and make secure purchases with user authentication and an admin dashboard for managing products and orders.

## 🚀 Features
Product Management: Browse, search, and filter products by category, price, or name.  
User Authentication: Secure signup and login system using JWT-based authentication.  
Shopping Cart: Add, update, and remove products from your cart seamlessly.  
Order Placement: Place and manage orders with order history tracking.  
Admin Dashboard: Admins can add, edit, or delete products and view all user orders.  
Image Upload: Product images stored securely using Cloudinary.  
Authorization: Protected routes for both users and admins.  
Responsive Design: Optimized UI for both desktop and mobile devices.  
Contact Form: Users can send inquiries directly via the contact page.  
Notifications: Real-time toast alerts for user actions (add to cart, login, checkout, etc.).  

# 🛠️ Tech Stack

## Frontend

React 19 – Modern JavaScript library for building interactive UIs
Vite – Next-generation build tool and fast development server
TailwindCSS 4 – Utility-first CSS framework for responsive design
Axios – Promise-based HTTP client for API communication
React Toastify – Beautiful and customizable toast notifications
React Router DOM – Client-side routing for smooth navigation
Context API – Global state management for cart and user data

## Backend
Node.js – JavaScript runtime for server-side logic
Express.js 5 – Minimal and flexible web framework
MongoDB – NoSQL database for scalable data storage
Mongoose – Elegant MongoDB object modeling for Node.js
JWT (JSON Web Token) – Secure authentication and route protection
bcrypt – Password hashing for user security
Cloudinary – Cloud-based image storage and optimization
Multer – Middleware for handling image uploads
CORS – Enable secure cross-origin resource sharing
dotenv – Environment variable management

## 🧱 Project Structure

E-COMMERCE/
├── backend/                           # Server-side application
│   ├── server.js                      # Entry point for backend (Express server setup)
│   ├── config/                        # Configuration files
│   │   ├── cloudinary.js              # Cloudinary setup for image uploads
│   │   └── mongodb.js                 # MongoDB connection setup
│   ├── controllers/                   # Business logic for each route
│   │   ├── cartController.js          # Handles cart operations
│   │   ├── orderController.js         # Manages order creation and status
│   │   ├── productController.js       # Handles product CRUD operations
│   │   └── userController.js          # Handles authentication and user data
│   ├── middleware/                    # Middleware for request handling
│   │   ├── adminAuth.js               # Protects admin-only routes
│   │   ├── auth.js                    # Verifies JWT tokens for users
│   │   └── multer.js                  # Handles image uploads before Cloudinary
│   ├── models/                        # MongoDB schema definitions
│   │   ├── userModel.js               # User schema
│   │   ├── productModel.js            # Product schema
│   │   ├── orderModel.js              # Order schema
│   │   └── cartModel.js               # Cart schema
│   ├── routes/                        # API endpoint definitions
│   │   ├── userRoutes.js              # User-related routes (auth, profile)
│   │   ├── productRoutes.js           # Product listing and management routes
│   │   ├── orderRoutes.js             # Order placement and tracking routes
│   │   ├── cartRoutes.js              # Shopping cart routes
│   │   └── adminRoutes.js             # Admin control routes
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
│   │   │   ├── BestSeller.jsx         # Displays top-selling products
│   │   │   ├── CartTotal.jsx          # Shows cart total and checkout summary
│   │   │   ├── Footer.jsx             # Footer section
│   │   │   ├── Hero.jsx               # Homepage hero banner
│   │   │   ├── LatestCollection.jsx   # Displays newly added products
│   │   │   ├── Navbar.jsx             # Navigation bar with links and cart icon
│   │   │   ├── NewsLetterBox.jsx      # Newsletter subscription section
│   │   │   ├── OurPolicy.jsx          # Store policy highlights
│   │   │   ├── ProductItem.jsx        # Single product card
│   │   │   ├── RelatedProducts.jsx    # Suggests similar items on product page
│   │   │   ├── SearchBar.jsx          # Search component for products
│   │   │   └── Title.jsx              # Reusable section header component
│   │   ├── Pages/                     # Page components for routes
│   │   │   ├── Home.jsx               # Homepage layout
│   │   │   ├── Collection.jsx         # Product collection/category page
│   │   │   ├── Product.jsx            # Single product detail page
│   │   │   ├── Cart.jsx               # Shopping cart page
│   │   │   ├── PlaceOrder.jsx         # Order placement/checkout page
│   │   │   ├── Order.jsx              # Displays user order history
│   │   │   ├── Login.jsx              # User login/register page
│   │   │   ├── Verify.jsx             # Payment/order verification page
│   │   │   ├── About.jsx              # About the business
│   │   │   └── Contact.jsx            # Contact form page
│   ├── public/                        # Static assets (icons, favicon, etc.)
│   ├── package.json                   # Frontend dependencies and scripts
│   └── vite.config.js                 # Vite configuration
│
├── .gitignore                         # Files and folders to ignore in Git
├── package.json                       # Project-level dependencies and scripts
└── README.md                          # Project documentation

$ gitignore                         # Files and folders to ignore in Git
├── package.json                       # Project-level dependencies and scripts
└── README.md 
