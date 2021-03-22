const express = require('express');
const router = express.Router();
const {
  signin,
  createCartographe,
  createFonction,
  createFonctionnaire,
} = require('../controllors/admin');

//USER
router.post('/login', signin);

//FONCTION
router.post('/create/fonction/:userId', createFonction);
router.put('/update/fonction/:userId', createFonction);
router.delete('/remove/fonction/:userId', createFonction);

//FONCTIONNAIRE
router.post('/create/fonctionnaire/:userId', createFonctionnaire);
router.put('/update/fonctionnaire/:userId', createFonctionnaire);
router.delete('/remove/fonctionnaire/:userId', createFonctionnaire);

//CARTOGRAPHE
router.post('/create/cartographe/:userId', createCartographe);
router.put('/update/cartographe/:userId', createCartographe);
router.delete('/remove/cartographe/:userId', createCartographe);

module.exports = router;
