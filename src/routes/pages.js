const express = require('express');
const route = express.Router();

const {
  form,
  login,
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
  listAutres,
} = require('../controllors/pages');

route.get('/', form);
route.get('/login', login);
route.get('/admin', admin);
route.get('/admin/add-cartographes', addCartographe);
route.get('/admin/add-user', addUser);
route.get('/admin/add-fonctionnaire', addFonctionnaire);
route.get('/admin/cartographes', listCartographe);
route.get('/admin/add-instruction', addInstructions);
route.get('/admin/instructions', listInstructions);
route.get('/admin/paiements', paiements);
route.get('/admin/add-autres-paiements', autres);
route.get('/admin/autres-paiements', listAutres);
route.get('/admin/rapports', rapports);

module.exports = route;
