const dotenv = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');
const { dirname } = require('path');
dotenv.config({ path: './config.env' }); //should be above app file
const Product = require('./../../models/productsModel');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //optional
  })
  .then((con) => console.log('DB connction stablished'))
  .catch((err) => console.log(err));

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/fakedata.json`, 'utf-8')
);

console.log(products);
//add data
const importData = async () => {
  try {
    await Product.create(products);
    console.log('Data sucessfully added');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//Delete all data from db

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data sucessfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') importData();
else if (process.argv[2] === '--delete') deleteData();
