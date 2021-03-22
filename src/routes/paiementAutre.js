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

router.post('/paiement-autre/create/:userId', create);
router.get('/paiement-autre/:userId/:id', read);
router.get('/paiement-autres/:userId', readAll);
router.put('/paiement-autre/:userId/:id', update);
router.delete('/paiement-autre/:userId/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
