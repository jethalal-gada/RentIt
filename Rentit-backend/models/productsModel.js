const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'this feild is required'],
  },
  owner: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
  },
  product: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is compulsory'],
  },
  unit: {
    type: String,
    required: [true, 'this feild is required'],
  },
  contact: {
    type: Number,
    required: [true, 'this feild is required'],
  },
  lpuid: {
    type: Number,
    required: [true, 'this feild is required'],
  },
  description: {
    type: String,
    required: [true, 'this feild is required'],
  },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
