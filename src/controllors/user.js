const User = require('../models/User');

// Read user by ID from params
exports.readUser = async (req, res) => {
  try {
    req.user.hashed_password = undefined;
    req.user.salt = undefined;
    return res.json(req.user);
  } catch (err) {
    return res.status(400).json({ error: 'Something wont wrong' + err });
  }
};

// Get all users
exports.readAllUsers = (req, res) => {
  try {
    User.find({})
      .sort([['createdAt', 'desc']])
      .exec((err, users) => {
        if (err) return res.status(400).json({ error: 'No user found' });
        users.salt = undefined;
        users.hashed_password = undefined;
        return res.json(users);
      });
  } catch (err) {
    return res.status(400).json({ error: 'Something wont wrong' + err });
  }
};

// Update the user
exports.updateUser = async (req, res) => {
  try {
    // Find user by ID
    const user = await User.findOne({ _id: req.user._id });
    const { firstName, lastName, email, role } = req.body;
    // Find user by Email
    const isExist = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ error: 'User not exist' });
    }

    // Check if email is used by a other user
    if (email && isExist && isExist.email && isExist.email !== user.email) {
      return res
        .status(400)
        .json({ error: 'This email is already used by a other user' });
    }

    // Pass the request body to user and save new user data in database
    Object.assign(user, { firstName, lastName, email, role });

    user.save((err, data) => {
      if (err) return res.status(400).json({ error: err });

      user.hashed_password = undefined;
      user.salt = undefined;

      return res.json(data);
    });
  } catch (err) {
    return res.status(400).json({ error: 'Something wont wrong' + err });
  }
};

// Update user password
exports.updatePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;
    const user = await User.findOne({ _id: req.user._id });
    // Check if the password is correct
    if (!user.authentificate(password)) {
      return res.status(400).json({ error: 'Wrong password !' });
    }

    Object.assign(user, { password: newPassword });

    user.save((err, data) => {
      if (err) {
        return res.status(400).json({ error: 'Something wont wrong' + err });
      }
      user.hashed_password = undefined;
      user.salt = undefined;

      return res.json(data);
    });
  } catch (err) {
    return res.status(400).json({ error: 'Something wont wrong' + err });
  }
};

// Remove user
exports.remove = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.user });
    user.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Unable to remove user' + err,
        });
      }
      res.json({
        message: 'User deleted',
      });
    });
  } catch (err) {
    res.status(400).json({ error: 'Unable to remove user' + err });
  }
};
