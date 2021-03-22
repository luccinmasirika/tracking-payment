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
} = require('../controllors/paiementAutre');

router.post('/paiement-autre/create/:userId', requireSignin, isAuth, create);
router.get('/paiement-autre/:userId/:id', requireSignin, isAuth, read);
router.get('/paiement-autres/:userId', requireSignin, isAuth, isAdmin, readAll);
router.put('/paiement-autre/:userId/:id', requireSignin, isAuth, update);
router.delete('/paiement-autre/:userId/:id', requireSignin, isAuth, remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
