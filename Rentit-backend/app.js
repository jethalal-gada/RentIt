const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const itemsRouter = require('./routes/itemsRoute');
const postRouter = require('./routes/postRoute');
const loginRouter = require('./routes/loginRoute');

//Middlewares
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('hello from the middleware🤣');
  next();
});

//Mouting

app.use('/api-rentit/v1/items', itemsRouter);
app.use('/api-rentit/v1/rent', postRouter);
app.use('/api-rentit/v1/login', loginRouter);

module.exports = app;
