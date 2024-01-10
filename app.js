const express = require('express');
const cors = require('cors');
// const { connect } = require('mongoose');
const connectToDb = require('./config/db.js');
const { createUser } = require('./controllers/userController.js');

const app = express();
app.use(express());
app.use(express.json());
app.use(cors());
connectToDb()

const userRoutes = require('./routes/userRoutes.js')
app.use('/', userRoutes);

module.exports = app;