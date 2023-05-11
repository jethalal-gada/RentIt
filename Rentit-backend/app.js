// const cloudinary = require('cloudinary').v2;
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const itemsRouter = require('./routes/itemsRoute');
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const itemDetailsRouter = require('./routes/itemDetailsRoute');

//Middlewares
app.use(express.json({ limit: '4mb' }));
app.use(cors()); //cors({origin: ['http://example.com', 'http://localhost:3000']
app.use(compression());

// if (process.env.NODE_ENV === 'development')
app.use(morgan('dev'));

//Mounting
app.use('/api-rentit/v1/items', itemsRouter);
app.use('/api-rentit/v1/rent', postRouter);
app.use('/api-rentit/v1/user', userRouter);
app.use('/api-rentit/v1/itemDetail', itemDetailsRouter);

module.exports = app;
