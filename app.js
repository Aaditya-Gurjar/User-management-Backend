const express = require('express');
const cors = require('cors');
// const { connect } = require('mongoose');
const connectToDb = require('./config/db.js');

const app = express();
app.use(express());
app.use(express.json());
app.use(cors());
connectToDb()
app.use('/', (req,res)=>{
    res.send("<h1>Welcome to My Server</h1>");
})

module.exports = app;