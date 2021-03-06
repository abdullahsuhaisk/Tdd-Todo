const express = require('express')
const mongoose = require("mongoose");
// require('dotenv/config');
const cors = require('cors');
const MockMongoose = require('mock-mongoose').MockMongoose;

// For Testing
const mockMongoose = new MockMongoose(mongoose);

// Routes
const todoRoute = require('./routes/Todo')

const MONGO_CONNECTION_URL = "mongodb+srv://dbAdmin:199393@cluster0.hr6tc.mongodb.net/todo?retryWrites=true&w=majority"

const app = express();

if (process.env.NODE_ENV === 'test') {
  mockMongoose.prepareStorage().then(function () {
    mongoose.connect(MONGO_CONNECTION_URL, function (err) {
    });
  });
}
else {
  mongoose.connect(MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}, async (err,db) => {
    if(!err) {
        console.log('connected to DB')
    } else {
        console.log("Can't connect to DB, error acured", err)
    }
  })
  
}

app.get('/',(req, res) => { res.send(' Hello word !')})
app.use(cors())
app.use(express.urlencoded())
app.use(express.json());

// Routes
app.use('/todo', todoRoute);

module.exports = app;