const express = require('express');
const app = express();
const config = require('./config/key');
//Export Body Parser
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
// Export Model
const UserModel = require('./Model/user');

// ############################# BODY PARSER ############################################
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
// ######################## CONSTANT VALUES ##############################################
const PORT = 5000;
const URL = config.mongoURL;

// ########################################################################################

app.get('/', (req, res) => {
  res.send('Hi');
});

app.post('/api/user/register', (req, res) => {
  const User = new UserModel(req.body);
  User.save((err, data) => {
    if (err) return res.status(500).json({ sucess: false, err: err });
    return res.status(200).json({ sucess: true, message: 'Data Saved' });
  });
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
