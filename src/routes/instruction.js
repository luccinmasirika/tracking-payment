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

router.post('/instruction/create/:userId', create);
router.get('/instruction/:userId/:id', read);
router.get('/instructions/:userId', readAll);
router.put('/instruction/:userId/:id', update);
router.delete('/instruction/:userId/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
