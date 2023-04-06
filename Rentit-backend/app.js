const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const itemsRouter = require('./routes/itemsRoute');
const postRouter = require('./routes/postRoute');
const loginRouter = require('./routes/loginRoute');
const saveItem = require('./routes/saveRoute');

//Middlewares
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//Mouting
app.use('/api-rentit/v1/items', itemsRouter);
app.use('/api-rentit/v1/rent', postRouter);
app.use('/api-rentit/v1/login', loginRouter);
app.use('/api-rentit/v1/itemDetail', saveItem);

module.exports = app;
