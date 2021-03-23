const express = require('express');
const route = express.Router();

const { isAuth, isAdmin, requireSignin } = require('../middlewares/auth');

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
route.get('/admin', admin);
route.get('/admin/add-cartographes', addCartographe);
route.get('/admin/edit-cartographes', editCartographe);
route.get('/admin/add-user', addUser);
route.get('/admin/add-fonctionnaire', addFonctionnaire);
route.get('/admin/add-fonction', addFonction);
route.get('/admin/cartographes', listCartographe);
route.get('/admin/add-instruction', addInstructions);
route.get('/admin/instructions', listInstructions);
route.get('/admin/paiements', paiements);
route.get('/admin/paiement-salaires', paiementSalaires);
route.get('/admin/paiement-perdiems', paiementPerdiems);
route.get('/admin/add-autres-paiements', autres);
route.get('/admin/autres-paiements', listAutres);
route.get('/admin/rapports', rapports);

route.param('userId', getUserByID);

module.exports = route;
