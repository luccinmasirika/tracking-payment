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

router.post('/cartographe/create/:userId', create);
router.get('/cartographe/:userId/:id', read);
router.get('/cartographes/:userId', readAll);
router.put('/cartographe/:userId/:id', update);
router.delete('/cartographe/:userId/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
