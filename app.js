const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connection = require('./database');
const homeRoute = require('./routes/home');
const bookRoute = require('./routes/book');

const app = express();

// Middleware
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());

// Routes
app.get('/', homeRoute);
app.use('/', bookRoute);

// 404 error
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Ohh you are lost, go back now!!!!',
  });
});

const startServer = async () => {
  await connection(); 

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
