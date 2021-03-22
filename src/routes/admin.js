const express = require('express');
const router = express.Router();
const {
  signin,
  createCartographe,
  createFonction,
  createFonctionnaire,
  createInstruction,
  createPaiement,
  createPaiementAutre,
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

//INSTRUCTION
router.post('/create/instruction/:userId', createInstruction);
router.put('/update/instruction/:userId', createInstruction);
router.delete('/remove/instruction/:userId', createInstruction);

//PAIEMENT
router.post('/create/paiement/:userId', createPaiement);
router.put('/update/paiement/:userId', createPaiement);
router.delete('/remove/paiement/:userId', createPaiement);


//PAIEMENT AUTRE
router.post('/create/paiement-autre/:userId', createPaiementAutre);
router.put('/update/paiement-autre/:userId', createPaiementAutre);
router.delete('/remove/paiement-autre/:userId', createPaiementAutre);

module.exports = router;
