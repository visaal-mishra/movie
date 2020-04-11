const express = require('express');
const app = express();

const mongoose = require('mongoose');
// Export Model
const UserModel = require('./Model/user');

const PORT = 5000;
const URL =
  'mongodb+srv://vishal:kaala123@travelgift-vc1o1.mongodb.net/test?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  res.send('Hi');
});

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT);
