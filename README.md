# Full Stack E-commerce Website Using React JS | MERN Stack. (WORK IN PROGRESS)

## Description

This project is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), integrated with Stripe for secure payment processing. The context chosen for this example is an online bookstore, allowing users to explore a wide range of books, add them to their cart, and make secure payments.

## Technologies Used

**Frontend**
- React.js: Framework for building the user interface  
- React Router: For client-side routing  
- Tailwind CSS: Modern and responsive styling  

**Backend**
- Node.js and Express.js: Server and API development  
- MongoDB and Mongoose: Database and data modeling  
- Stripe API: Secure payment processing  

## Features

- User registration and login  
- Browse and search for books  
- Shopping cart with quantity management  
- Secure payment gateway using Stripe  
- Admin panel to manage books and orders  

## Installation and Setup

1. Clone the repository:
```bash
    git clone git@github.com:JM-BP/ecommerce-MERN.git
    cd ecommerce-MERN
```
2. Install backend dependencies:
```bash
    cd backend
    npm install
```
3. Configure environment variables in the `.env` file:
```env
    MONGO_URI=your_mongodb_connection
    STRIPE_SECRET_KEY=your_stripe_secret_key
    JWT_SECRET=your_jwt_secret
```
4. Start the backend server:
```bash
    npm start
```
5. Install frontend dependencies:
```bash
    cd ../frontend
    npm install
```
6. Start the frontend client:
```bash
    npm start
```

## Usage

- Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Register, log in, and start browsing through the available books
- Add books to the shopping cart and proceed to checkout using Stripe

