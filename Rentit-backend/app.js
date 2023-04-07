const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const itemsRouter = require('./routes/itemsRoute');
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const itemDetailsRouter = require('./routes/itemDetailsRoute');

//Middlewares
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//Mouting
app.use('/api-rentit/v1/items', itemsRouter);
app.use('/api-rentit/v1/rent', postRouter);
app.use('/api-rentit/v1/user', userRouter);
app.use('/api-rentit/v1/itemDetail', itemDetailsRouter);

module.exports = app;
