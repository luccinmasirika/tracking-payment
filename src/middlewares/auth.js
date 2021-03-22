const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

// Require signin to access on some pages
exports.requireSignin = (req, res, next) => {
  const token =
    req.headers['x-access-token'] ||
    req.headers['authorization'] ||
    req.cookies.token;

  // Check if token exist
  if (!token) {
    req.flash('Error', 'Access denied');
    return res.status(401).json({ error: 'Access denied, No token' });
  }

  try {
    //if a token exist, check if it valid and set req.auth and pass to the next
    const decoded = jwt.verify(token, config.secret.signedTokenString);
    req.auth = decoded;
    next();
  } catch (err) {
    req.flash('Error', 'Access denied');
    return res.status(403).json({ error: 'Access denied' + err });
  }
};

// Check if the user is authentificate / login
exports.isAuth = (req, res, next) => {
  const user = req.user && req.auth && req.user._id == req.auth._id;

  if (!user) {
    req.flash('Error', 'You need to be login');
    return res.status(403).json({ error: 'You need to be login' });
  }
  next();
};

// Check if user is Admin
exports.isAdmin = (req, res, next) => {
  const user = req.user && req.auth && req.user.role == 'Admin';

  if (!user) {
    req.flash('Error', 'Access denied');
    return res
      .status(403)
      .json({ error: 'Access denied, You nedd to be admin' });
  }
  next();
};
