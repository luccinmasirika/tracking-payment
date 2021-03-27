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

router.post('/fonctionnaire/create',requireSignin, create);
router.get('/fonctionnaire/:id', read);
router.get('/fonctionnaires', readAll);
router.put('/fonctionnaire/:id',requireSignin, update);
router.delete('/fonctionnaire/:id',requireSignin, remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
