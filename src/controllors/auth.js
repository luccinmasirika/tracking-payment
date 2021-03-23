const jwt = require('jsonwebtoken'); // generate signed token
const User = require('../models/User');
const { config } = require('../config/config');

// User Register
exports.signup = async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (findUser) {
    return res.status(400).json({ error: '"email" is already taken' });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(400).json({ error: err });
    user.hashed_password = undefined;
    user.salt = undefined;
    return res.json(user);
  });
};

// User Login
exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'We have not find a user with this email. Please signup',
      });
    }

    // If user is founded make sure email and password match
    if (!user.authentificate(password)) {
      return res.status(400).json({ error: 'Email and password dont match' });
    }

    // Generate a signed token
    const token = jwt.sign({ _id: user._id }, config.secret.signedTokenString);

    // Persist token in cookie

    res.cookie('token', token, { expire: new Date() + 999 });

    // Send token and user
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};

// User Logout
exports.signout = (req, res) => {
  try {
    res.clearCookie('token');
    return res.json({ message: 'Logout success' });
  } catch (error) {
    return res.status(400).json({
      errror: 'Something want wrong. Try again or contact assistance',
    });
  }
};
