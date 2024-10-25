const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
dotenv.config();


const PORT = process.env.PORT || 4000;
const app = express();

const connect = require('./database/db');
const MainRouter = require('./routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());


app.use('/api', MainRouter);


app.listen(PORT, () => {
    connect();
    console.log(`Server is working on ${PORT} port`);
});