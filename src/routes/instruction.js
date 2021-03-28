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

router.post('/instruction/create', requireSignin, create);
router.get('/instruction/:id', requireSignin, read);
router.get('/instructions', readAll);
router.put('/instruction/:id', requireSignin, update);
router.delete('/instruction/:id', requireSignin, remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
