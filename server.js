const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const coffeeRouter = require('./controllers/coffees');

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
    });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/coffees', coffeeRouter);


// Routes


// Listen
app.listen(3002, () => {
    console.log('Server is running');
    });
