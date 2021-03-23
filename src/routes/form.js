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

router.post('/form/create', create);
router.get('/form/:id', read);
router.get('/forms', readAll);
router.put('/form/:id', update);
router.delete('/form/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
