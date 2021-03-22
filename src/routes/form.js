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
} = require('../controllors/form');

router.post('/form/create/:userId',  create);
router.get('/form/:userId/:id',  read);
router.get('/forms/:userId', readAll);
router.put('/form/:userId/:id',  update);
router.delete('/form/:userId/:id',  remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
