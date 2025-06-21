require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Harsha:12345@empad.rjrmgpi.mongodb.net/?retryWrites=true&w=majority&appName=EmPad";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Add your API routes here
const userAPI = require('./APIs/userAPI');
const productAPI = require('./APIs/productAPI');

app.use('/user', userAPI);
app.use('/product', productAPI);

// MongoDB Atlas connection and server start
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });
