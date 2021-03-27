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
} = require('../controllors/cartographe');

router.post('/cartographe/create', requireSignin, create);
router.get('/cartographe/:id', read);
router.get('/cartographes', readAll);
router.put('/cartographe/:id', requireSignin, update);
router.delete('/cartographe/:id', requireSignin, remove);

router.param('id', getByID);
router.param('userId', getUserByID);
requireSignin, (module.exports = router);
