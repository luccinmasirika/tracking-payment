const express = require('express');
const route = express.Router();

const { form, login, admin } = require('../controllors/pages');

route.get('/', form);
route.get('/login', login);
route.get('/admin', admin);

module.exports = route;
