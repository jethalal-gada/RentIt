const Users = require('../models/usersModel');

exports.saveItem = async (req, res) => {
  // const user = await User.findById(req.params.id);
  console.log(req.body.user);
  try {
    const id = req.params.id;
    const update = { savedProducts: id };
    const filter = { email: req.body.user };
    const user = await Users.findOneAndUpdate(
      filter,
      { $addToSet: update },
      (err, sucess) => {
        if (err) console.log(err);
        else console.log(sucess);
      }
    );
    res.status(201).json({
      status: 'sucess',
      data: {
        savedItems: `Done ${id}`,
        user: user,
      },
    });
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
