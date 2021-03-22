const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { config } = require('../config/config')

/**
 * GET USER FROM DATABASE BY ID
 */

 // Get user by ID from params
 exports.getUserByID = async (req, res, next, id) => {
  try {
    User.findById(id).exec((err, user) => {
      if ((err, !user)) {
        return res.status(400).json({ error: 'User not exist' })
      } else {
        user.hashed_password = undefined
        user.salt = undefined
        req.user = user
        next()
      }
    })
  } catch (err) {
    return res.status(400).json({ error: 'Something wont wrong' + err })
  }
}
