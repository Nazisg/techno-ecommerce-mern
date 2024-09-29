# E-Commerce Application

This is an e-commerce application built with Node.js, Express, and MongoDB. It features user authentication, product and category management, a shopping cart system, and an order processing functionality.

## Features

- User Registration and Login
- JWT-based Authentication and Authorization
- Product and Category Management
- Shopping Cart: Add/Remove Items
- Order Processing
- Input Validation and Rate Limiting
- Secure with Helmet.js
- Logging with Morgan

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- MongoDB

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install dependencies
Run the following command to install all the necessary dependencies:
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root of your project and add the following environment variables:
```plaintext
MONGO_URI=your_mongo_db_connection_string

JWT_SECRET_KEY=your_jwt_secret_key
JWT_REFRESH_SECRET_KEY=your_jwt_refresh_secret_key
```

### 4. Run the application
Start the application by running:
```bash
npm start
```
By default, the application will run on `http://localhost:4000`.

### 5. Access the API
You can now access the API and perform operations such as creating categories, products, managing your cart, and placing orders.

### Built With
```bash
  "bcrypt": "^5.1.1",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.21.0",
  "express-rate-limit": "^7.4.0",
  "express-validator": "^7.2.0",
  "helmet": "^7.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.9.0",
  "mongoose": "^8.6.3",
  "morgan": "^1.10.0"
```

### Contact
If you have any questions or feedback, please reach out at meheddinngyv9@gmail.com.

### License
This project is licensed under the `MIT License`.
