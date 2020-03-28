const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Models

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Database Setup
mongoose.connect(
  'mongodb+srv://admin:admin@cluster0-kgze8.mongodb.net/ams_main?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening in port ' + PORT);
});
