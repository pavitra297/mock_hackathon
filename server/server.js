const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

//error handling middleware
app.use((err, req, res, next) => {
    res.send({message:'error',payload:err});
  });