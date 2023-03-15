const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'this feild is required'],
    unique: true,
  },
  owner: {
    type: String,
    required: [true, 'name is required'],
    unique: false,
  },
  product: {
    type: String,
    required: [true, 'name is required'],
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
