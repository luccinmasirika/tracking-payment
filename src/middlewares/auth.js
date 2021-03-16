const jwt = require('jsonwebtoken')
const { config } = require('../config/config')

/**
 * CHECK IF USER IS AUTH
 */
exports.isAuth = (req, res, next) => {
  try {
    const token = req.headers['x-acces-token'] || req.headers['authorization']
    const decodedToken = jwt.verify(token, config.secret.signedTokenString)
    req.auth = decodedToken
    let user = req.user && req.auth && req.user._id == req.auth._id
    if (!user) {
      res.status(403).json({ error: 'Acces denied!' })
    } else {
      next()
    }
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}
