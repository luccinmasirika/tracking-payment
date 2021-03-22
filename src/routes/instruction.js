const express = require('express');
const router = express.Router();
const { isAuth, isAdmin, requireSignin } = require('../middlewares/auth');
const { getUserByID } = require('../middlewares/user');
const {
  create,
  read,
  update,
  readAll,
  remove,
  getByID,
} = require('../controllors/instruction');

router.post('/instruction/create/:userId', requireSignin, isAuth, create);
router.get('/instruction/:userId/:id', requireSignin, isAuth, read);
router.get('/instructions/:userId', requireSignin, isAuth, isAdmin, readAll);
router.put('/instruction/:userId/:id', requireSignin, isAuth, update);
router.delete('/instruction/:userId/:id', requireSignin, isAuth, remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
