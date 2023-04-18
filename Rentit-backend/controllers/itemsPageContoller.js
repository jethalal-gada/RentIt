const Product = require('../models/productsModel');
const User = require('../models/usersModel');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`,
});

exports.getItems = async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json({
      status: 'sucess',
      results: items.length,
      data: {
        items: items,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSearchResults = async (req, res) => {
  try {
    const results = await Product.find({
      product: { $regex: new RegExp(req.params.id, 'i') },
    });
    res.status(200).json({
      status: 'sucess',
      data: {
        items: results,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getFilteredResults = async (req, res) => {
  try {
    const results = await Product.find({
      type: req.params.id,
    });
    res.status(200).json({
      status: 'sucess',
      data: {
        items: results,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getItemDetails = async (req, res) => {
  try {
    const item = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'sucess',
      data: {
        item: item,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteItem = async (req, res) => {
  try {
    const { id, user, type } = req.params;

    //Check the post type
    if (type === 'posts') {
      const product = await Product.findById(req.params.id);
      if (product.email === user) {
        //Delete the product's image from cloudinary
        cloudinary.uploader.destroy(product.image.public_id);
        //First delete the post's document
        await Product.findByIdAndDelete(req.params.id);
        //Then if any user has saved it then delete it from there too
        await User.updateMany(
          { savedProducts: id },
          { $pull: { savedProducts: id } }
        );
        res.status(204).json({
          status: 'sucess',
          data: null,
        });
      }
    } else if (type === 'saves') {
      await User.findOneAndUpdate(
        { email: user },
        { $pull: { savedProducts: id } },
        { new: true }
      );
      res.status(204).json({
        status: 'sucess',
        data: null,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
