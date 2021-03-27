const express = require('express');
const route = express.Router();

const {
  requireSignin,
} = require('../middlewares/auth');

const { getUserByID } = require('../middlewares/user');

const {
  form,
  loginPage,
  admin,
  addInstructions,
  listInstructions,
  paiements,
  autres,
  rapports,
  addCartographe,
  editCartographe,
  listCartographe,
  addUser,
  addFonctionnaire,
  addFonction,
  listAutres,
  paiementSalaires,
  paiementPerdiems,
} = require('../controllors/pages');

route.get('/', form);
route.get('/login', loginPage);
route.get('/admin', requireSignin, admin);
route.get('/admin/add-cartographes', requireSignin, addCartographe);
route.get('/admin/edit-cartographes', requireSignin, editCartographe);
route.get('/admin/add-user', requireSignin, addUser);
route.get('/admin/add-fonctionnaire', requireSignin, addFonctionnaire);
route.get('/admin/add-fonction', requireSignin, addFonction);
route.get('/admin/cartographes', requireSignin, listCartographe);
route.get('/admin/add-instruction', requireSignin, addInstructions);
route.get('/admin/instructions', requireSignin, listInstructions);
route.get('/admin/paiements', requireSignin, paiements);
route.get('/admin/paiement-salaires', requireSignin, paiementSalaires);
route.get('/admin/paiement-perdiems', requireSignin, paiementPerdiems);
route.get('/admin/add-autres-paiements', requireSignin, autres);
route.get('/admin/autres-paiements', requireSignin, listAutres);
route.get('/admin/rapports', requireSignin, rapports);

route.param('userId', getUserByID);

module.exports = route;
