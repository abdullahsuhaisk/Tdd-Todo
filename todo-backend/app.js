const express = require('express')
const mongoose = require("mongoose");
// require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoute = require('./routes/Todo')

const app = express();

mongoose.connect("mongodb+srv://dbAdmin:199393@cluster0.hr6tc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, async (err,db) => {
  if(!err) {
      console.log('connected to DB')
  } else {
      console.log("Can't connect to DB, error acured", err)
  }
})


app.get('/',(req, res) => { res.send(' Hello word !')})
app.use(cors())
// app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(express.json());

// Routes
app.use('/todo', todoRoute);

module.exports = app;