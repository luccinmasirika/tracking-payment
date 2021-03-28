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

router.post('/paiement/create',  create);
router.get('/paiement/:id', read);
router.get('/paiements', readAll);
router.put('/paiement/:id', update);
router.delete('/paiement/:id',  remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
