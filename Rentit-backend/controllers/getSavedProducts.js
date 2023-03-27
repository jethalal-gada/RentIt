const Users = require('../models/usersModel');

exports.getSavedProducts = async (req, res) => {
  try {
    const user = req.params.id;
    console.log('user', user);
    const savedProducts = await Users.find(
      { email: user },
      { savedProducts: 1, _id: 0 }
    );
    res.status(201).json({
      status: 'sucess',
      ...savedProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
