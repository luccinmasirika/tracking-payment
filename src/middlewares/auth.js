const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

// Require signin to access on some pages
exports.requireSignin = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      req.flash('Error', 'Access denied');
      return res.status(401).redirect('/login');
    }

    const decoded = jwt.verify(token, config.secret.signedTokenString);
    req.auth = decoded;
    console.log('user', req.auth);
    next();
  } catch (err) {
    req.flash('Error', 'Access denied');
    res.status(403).res.redirect('/login');
  }
};

// Check if the user is authentificate / login
exports.isAuth = (req, res, next) => {
  const user = req.user && req.auth && req.user._id == req.auth._id;

  console.log('user auth', user);

  if (!user) {
    req.flash('Error', 'You need to be login');
    return res.status(403).redirect('/login');
  }
  next();
};

// Check if user is Admin
exports.isAdmin = (req, res, next) => {
  const user = req.user && req.auth && req.user.role == 'Admin';

  console.log('user admin', user);

  if (!user) {
    req.flash('Error', 'Access denied, You nedd to be admin');
    return res.status(403).redirect('/login');
  }
  next();
};
