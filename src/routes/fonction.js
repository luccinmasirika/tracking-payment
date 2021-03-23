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
} = require('../controllors/fonction');

router.post('/fonction/create', create);
router.get('/fonction/:id', read);
router.get('/fonctions', readAll);
router.put('/fonction/:id', update);
router.delete('/fonction/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
