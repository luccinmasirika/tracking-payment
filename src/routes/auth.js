const express = require('express')
const router = express.Router()
const { signup, signin, signout } = require('../controllors/auth')
const { signupValidator } = require('../validators/validatorsSchema')

router.post('/signup', signupValidator, signup)
router.post('/signin', signin)
router.get('/signout', signout)

module.exports = router
