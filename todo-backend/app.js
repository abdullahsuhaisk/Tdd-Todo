const express = require('express')
const mongoose = require("mongoose");
// require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.get('/',(req, res) => { res.send(' Hello word !')})
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(express.json());


module.exports = app;