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

router.post('/paiement/create/:userId', create);
router.get('/paiement/:userId/:id',read);
router.get('/paiements/:userId',  readAll);
router.put('/paiement/:userId/:id', update);
router.delete('/paiement/:userId/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
