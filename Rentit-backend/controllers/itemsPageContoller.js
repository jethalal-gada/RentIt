const Product = require('../models/productsModel');
const User = require('../models/usersModel');
const APIFeatures = require('./../utils/apiFeatures');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`,
});

exports.getItems = async (req, res) => {
  try {
    //This class will hanlde queries attached on request
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .search()
      .sort();

    const items = await features.query; //wait till fearure return the final output after chaining

    res.status(200).json({
      status: 'success',
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
      if (product.sub === user) {
        //Delete the product's image from cloudinary
        cloudinary.uploader.destroy(product.image.public_id);
        //First delete the post's document
        await Product.findByIdAndDelete(req.params.id);
        //Then if any user has saved it then delete it from there too
        await User.updateMany(
          { savedProducts: id },
          { $pull: { savedProducts: id } }
        );
        await User.updateMany(
          { likedProducts: id },
          { $pull: { likedProducts: id } }
        );
        res.status(204).json({
          status: 'sucess',
          data: null,
        });
      }
    } else if (type === 'saves') {
      await User.findOneAndUpdate(
        { sub: user },
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
