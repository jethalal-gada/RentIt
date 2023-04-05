const Users = require('../models/usersModel');

exports.getSavedProducts = async (req, res) => {
  try {
    const userEmail = req.params.id;

    const user = await Users.findOne({ email: userEmail });

    if (req.headers._id && String(user._id) === String(req.headers._id)) {
      const savedProducts = await user.populate('savedProducts').execPopulate();
      res.status(201).json({
        status: 'sucess',
        saves: savedProducts.savedProducts,
      });
    } else {
      res.status(403).json({
        status: 'fail',
        message: 'Authentication failed',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getSavedProductsList = async (req, res) => {
  try {
    const userEmail = req.params.id;
    const user = await Users.findOne({ email: userEmail });
    if (String(user._id) === String(req.headers._id)) {
      const savedProducts = await user.savedProducts;
      res.status(201).json({
        status: 'sucess',
        saves: savedProducts,
      });
    } else {
      res.status(403).json({
        status: 'fail',
        message: 'Authentication failed',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
