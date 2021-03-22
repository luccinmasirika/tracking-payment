const express = require('express');
const route = express.Router();

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

module.exports = route;
