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

router.post('/paiement-autre/create', requireSignin, create);
router.get('/paiement-autre/:id', read);
router.get('/paiement-autres', readAll);
router.put('/paiement-autre/:id', requireSignin, update);
router.delete('/paiement-autre/:id', requireSignin, remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
