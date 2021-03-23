const express = require('express');
const router = express.Router();
const { signup, signin, signout } = require('../controllors/auth');
const { signupValidator } = require('../validators/validatorsSchema');
const { getUserByID } = require('../middlewares/user');

router.post('/signup', signupValidator, signup);
router.post('/registerUser', signupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

router.param('userId', getUserByID);

module.exports = router;
