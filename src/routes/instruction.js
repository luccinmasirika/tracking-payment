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
} = require('../controllors/instruction');

router.post('/instruction/create',  create);
router.get('/instruction/:id',  read);
router.get('/instructions', readAll);
router.put('/instruction/:id',  update);
router.delete('/instruction/:id',  remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
