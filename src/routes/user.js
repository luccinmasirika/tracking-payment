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

router.get('/user', readUser);
router.get('/users', readAllUsers);
router.put('/user', updateUser);
router.delete('/user/:userId', remove);

router.param('userId', getUserByID);

module.exports = router;
