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
} = require('../controllors/fonctionnaire');

router.post('/fonctionnaire/create/:userId', create);
router.get('/fonctionnaire/:userId/:id',  read);
router.get('/fonctionnaires/:userId', readAll);
router.put('/fonctionnaire/:userId/:id', update);
router.delete('/fonctionnaire/:userId/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
