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
//FORM
router.post('/create/form', createForm);

//USER
router.post('/login', signin);
router.post('/register', signup);

//FONCTION
router.post('/create/fonction', createFonction);
router.put('/update/fonction', createFonction);
router.delete('/remove/fonction', createFonction);

//FONCTIONNAIRE
router.post('/create/fonctionnaire', createFonctionnaire);
router.put('/update/fonctionnaire', createFonctionnaire);
router.delete('/remove/fonctionnaire', createFonctionnaire);

//CARTOGRAPHE
router.post('/create/cartographe', createCartographe);
router.put('/update/cartographe', updateCartographe);
router.delete('/remove/cartographe', createCartographe);

//INSTRUCTION
router.post('/create/instruction', createInstruction);
router.put('/update/instruction', createInstruction);
router.delete('/remove/instruction', createInstruction);

//PAIEMENT
router.post('/create/paiement', createPaiement);
router.put('/update/paiement', createPaiement);
router.delete('/remove/paiement', createPaiement);

//PAIEMENT AUTRE
router.post('/create/paiement-autre', createPaiementAutre);
router.put('/update/paiement-autre', createPaiementAutre);
router.delete('/remove/paiement-autre', createPaiementAutre);

module.exports = router;
