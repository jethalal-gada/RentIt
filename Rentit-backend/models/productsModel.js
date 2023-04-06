const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Image feild is required'],
    unique: [true, 'Image already exists'],
    trim: true,
  },
  owner: {
    type: String,
    required: [true, 'name is required'],
    unique: false,
    trim: true,
  },
  product: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is compulsory'],
    trim: true,
  },
  unit: {
    type: String,
    required: [true, 'Unit feild is required'],
  },
  contact: {
    type: Number,
    required: [true, 'Contact feild is required'],
  },
  lpuid: {
    type: Number,
    required: [true, 'Lpu ID feild is required'],
  },
  description: {
    type: String,
    required: [true, 'Description feild is required'],
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  avaliable: {
    type: Boolean,
    default: true,
  },
  // email: { type: mongoose.Schema.Types.String, ref: 'Users' },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
