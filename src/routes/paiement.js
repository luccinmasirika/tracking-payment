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
} = require('../controllors/paiement');

router.post('/paiement/create/:userId', requireSignin, isAuth, create);
router.get('/paiement/:userId/:id', requireSignin, isAuth, read);
router.get('/paiements/:userId', requireSignin, isAuth, isAdmin, readAll);
router.put('/paiement/:userId/:id', requireSignin, isAuth, update);
router.delete('/paiement/:userId/:id', requireSignin, isAuth, remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
