const express = require('express');
const router = express.Router();
const { signin, createCartographe, createFonction } = require('../controllors/admin');

//USER
router.post('/login', signin);

//FONCTION
router.post('/create/fonction/:userId', createFonction);
router.put('/update/fonction/:userId', createFonction);
router.delete('/remove/fonction/:userId', createFonction);

//FONCTIONNAIRE
router.post('/create/fonctionnaire/:userId', createCartographe);
router.put('/update/fonctionnaire/:userId', createCartographe);
router.delete('/remove/cartographefonctionnaire/:userId', createCartographe);

//CARTOGRAPHE
router.post('/create/cartographe/:userId', createCartographe);
router.put('/update/cartographe/:userId', createCartographe);
router.delete('/remove/cartographe/:userId', createCartographe);

module.exports = router;
