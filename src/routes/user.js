const express = require('express');
const router = express.Router();
const { isAuth, isAdmin, requireSignin } = require('../middlewares/auth');
const { getUserByID } = require('../middlewares/user');
const {
  readUser,
  updateUser,
  readAllUsers,
  remove,
} = require('../controllors/user');

router.get('/user/:userId', requireSignin, isAuth, readUser);
router.get('/users/:userId', requireSignin, isAuth, isAdmin, readAllUsers);
router.put('/user/:userId', requireSignin, isAuth, updateUser);
router.delete('/user/:userId', requireSignin, isAuth, remove);

router.param('userId', getUserByID);

module.exports = router;
