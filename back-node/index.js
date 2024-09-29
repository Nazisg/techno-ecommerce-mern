// Path
const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

// Dotenv Config 
dotenv.config();

// Port 
const PORT = process.env.PORT || 4000;

// App
const app = express();

// Imports
const connect = require('./database/db');
const MainRouter = require('./routes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

// Main Router
app.use('/api', MainRouter);

// App Listen
app.listen(PORT, () => {
    connect();
    console.log(`Server is working on ${PORT} port`);
});