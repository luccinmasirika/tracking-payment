const { signin, create, update } = require('../api');
const axios = require('axios');
const { config } = require('../config/config');
const API = config.server.api;

// SIGNIN
exports.signin = async (req, res) => {
  try {
    const response = await axios.post(`${API}/signin`, req.body);
    if (response.data.error) {
      req.flash('Error', `${data.error}`);
      res.status(400).redirect('/login');
    }
    console.log('data', response.data);
    res.redirect('/admin');
  } catch (err) {
    req.flash('Error', `${err}`);
    console.log('data', err);
    return res.status(400).redirect('/login');
  }
};

// SIGNUP
exports.signup = async (req, res) => {
  try {
    create(req.body, `signup`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-user');
      }
      console.log('data', data);
      req.flash('Success', `${data.firstName} ${data.lastName} added`);
      res.redirect('/admin/add-user');
    });
  } catch (err) {
    console.log(err);
    res.redirect('/admin/add-user');
  }
};

//CREATE CARTOGRAPHE
exports.createCartographe = async (req, res) => {
  try {
    create(req.body, `cartographe/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-cartographes');
      }
      console.log('data', data);
      req.flash('Success', `${data.firstName} ${data.lastName} added`);
      res.redirect('/admin/cartographes');
    });
  } catch (err) {
    console.log(err);
    res.redirect('/admin/add-cartographes');
  }
};

//UPDATE CARTOGRAPHE
exports.updateCartographe = async (req, res) => {
  try {
    update(req.body, `cartographe`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-cartographes');
      }
      console.log('data1', data);
      req.flash('Success', `${data.firstName} ${data.lastName} Updated`);
      res.redirect('/admin/cartographes');
    });
  } catch (err) {
    console.log(err);
    res.redirect('/admin/add-cartographes');
  }
};

//CREATE FONCTION
exports.createFonction = async (req, res) => {
  try {
    create(req.body, `fonction/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-fonction');
      }
      console.log('data', data);
      req.flash('Success', `${data.name} added`);
      res.redirect('/admin/add-fonction');
    });
  } catch (err) {
    console.log(err);
    res.redirect('/admin/add-fonction');
  }
};

//CREATE FONCTIONNAIRE
exports.createFonctionnaire = async (req, res) => {
  try {
    create(req.body, `fonctionnaire/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-fonctionnaire');
      }
      console.log('data', data);
      req.flash('Success', `${data.firstName} ${data.lastName} added`);
      res.redirect('/admin/add-fonctionnaire');
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-fonctionnaire');
  }
};

//CREATE INSTRUCTION
exports.createInstruction = async (req, res) => {
  try {
    create(req.body, `instruction/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-instruction');
      }
      console.log('test', data);
      req.flash('Success', `Instruction letter added`);
      res.redirect('/admin/instructions');
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-instruction');
  }
};

//CREATE INSTRUCTION
exports.createInstruction = async (req, res) => {
  try {
    create(req.body, `instruction/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/instructions');
      }
      console.log('test', data);
      req.flash('Success', `Instruction letter added`);
      res.redirect('/admin/instructions');
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/instructions');
  }
};

//CREATE PAIEMENT
exports.createPaiement = async (req, res) => {
  try {
    create(req.body, `paiement/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/paiements');
      }
      req.flash('Success', `Payment added`);
      res.redirect('/admin/paiements');
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/paiements');
  }
};

//CREATE PAIEMENT
exports.createPaiementAutre = async (req, res) => {
  try {
    create(req.body, `paiement-autre/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/add-autres-paiements');
      } else {
        req.flash('Success', `Payment added`);
        res.redirect('/admin/autres-paiements');
      }
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-autres-paiements');
  }
};

//AUTRES PAIEMENT
exports.updatePaiementAutre = async (req, res) => {
  try {
    create(req.body, `paiement-autre/${req.params.id}`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/admin/autres-paiements');
      } else {
        req.flash('Success', `Payment updated`);
        res.redirect('/admin/autres-paiements');
      }
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/autres-paiements');
  }
};

//CREATE FORM
exports.createForm = async (req, res) => {
  try {
    create(req.body, `form/create`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/');
      } else {
        req.flash('Success', `Form submeted`);
        res.redirect('/');
      }
      console.log('data', data);
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/');
  }
};
