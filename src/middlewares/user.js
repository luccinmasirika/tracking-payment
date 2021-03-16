const db = require('../models')
const jwt = require('jsonwebtoken')
const { config } = require('../config/config')

/**
 * GET USER FROM DATABASE BY ID
 */
exports.getUserById = async (req, res, next, id) => {
  try {
    const userFound = await db.User.findById(id)
    if (!userFound) {
      res.status(400).json({ error: 'Non user found' })
    }
    req.user = userFound
    req.user.password = undefined
    next()
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

/**
 * RREQUIRE USER TO BE SIGN IN BEFORE GO FOR NEXT
 */
exports.requireSignin = (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      req.flash('Error', 'Access denied')
      return res.status(401).redirect('/signin')
    }

    const decoded = jwt.verify(token, config.secret.signedTokenString)
    req.auth = decoded
    next()
  } catch (err) {
    req.flash('Error', 'Access denied')
    res.status(403).res.redirect('/signin')
  }
}

exports.isAuth = (req, res, next) => {
  let user = req.user && req.auth && req.user._id == req.auth._id
  if (!user) {
    req.flash('Error', 'You need to be login')
    return res.status(403).redirect('/signin')
  }
  next()
}
