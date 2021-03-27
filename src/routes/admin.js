const express = require('express');
const router = express.Router();
const {
  signin,
  signup,
  createCartographe,
  updateCartographe,
  createFonction,
  createFonctionnaire,
  createInstruction,
  createPaiement,
  createPaiementAutre,
  createForm,
} = require('../controllors/admin');

const { requireSignin } = require('../middlewares/auth');

//FORM
router.post('/create/form', createForm);

//USER
router.post('/login', signin);
router.post('/register', signup);

//FONCTION
router.post('/create/fonction', requireSignin, createFonction);
router.put('/update/fonction', requireSignin, createFonction);
router.delete('/remove/fonction', requireSignin, createFonction);

//FONCTIONNAIRE
router.post('/create/fonctionnaire', requireSignin, createFonctionnaire);
router.put('/update/fonctionnaire', requireSignin, createFonctionnaire);
router.delete('/remove/fonctionnaire', requireSignin, createFonctionnaire);

//CARTOGRAPHE
router.post('/create/cartographe', requireSignin, createCartographe);
router.put('/update/cartographe', requireSignin, updateCartographe);
router.delete('/remove/cartographe', requireSignin, createCartographe);

//INSTRUCTION
router.post('/create/instruction', requireSignin, createInstruction);
router.put('/update/instruction', requireSignin, createInstruction);
router.delete('/remove/instruction', requireSignin, createInstruction);

//PAIEMENT
router.post('/create/paiement', requireSignin, createPaiement);
router.put('/update/paiement', requireSignin, createPaiement);
router.delete('/remove/paiement', requireSignin, createPaiement);

//PAIEMENT AUTRE
router.post('/create/paiement-autre', requireSignin, createPaiementAutre);
router.put('/update/paiement-autre', requireSignin, createPaiementAutre);
router.delete('/remove/paiement-autre', requireSignin, createPaiementAutre);

module.exports = router;
