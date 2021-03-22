const { signin, create } = require('../api');

// SIGNIN
exports.signin = async (req, res) => {
  try {
    signin(req.body).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
        res.redirect('/login');
      }
      req.session.user = data;
      console.log('data', data);
      res.redirect('/admin');
    });
  } catch (err) {
    console.log('err2', err);
  }
};

//CREATE CARTOGRAPHE
exports.createCartographe = async (req, res) => {
  try {
    create(req.body, `cartographe/create/${req.params.userId}`).then((data) => {
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

//CREATE FONCTION
exports.createFonction = async (req, res) => {
  try {
    create(req.body, `fonction/create/${req.params.userId}`).then((data) => {
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
    create(req.body, `fonctionnaire/create/${req.params.userId}`).then(
      (data) => {
        if (data.error) {
          req.flash('Error', `${data.error}`);
          res.redirect('/admin/add-fonctionnaire');
        }
        console.log('data', data);
        req.flash('Success', `${data.firstName} ${data.lastName} added`);
        res.redirect('/admin/add-fonctionnaire');
      }
    );
  } catch (err) {
    console.log(err);
    res.redirect('/admin/add-fonctionnaire');
  }
};

//CREATE INSTRUCTION
exports.createInstruction = async (req, res) => {
  try {
    create(req.body, `instruction/create/${req.params.userId}`).then((data) => {
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

//CREATE PAIEMENT
exports.createPaiement = async (req, res) => {
  try {
    create(req.body, `paiement/create/${req.params.userId}`).then((data) => {
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
    create(req.body, `paiement-autre/create/${req.params.userId}`).then(
      (data) => {
        if (data.error) {
          req.flash('Error', `${data.error}`);
          res.redirect('/admin/add-autres-paiements');
        } else {
          req.flash('Success', `Payment added`);
          res.redirect('/admin/autres-paiements');
        }
      }
    );
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-autres-paiements');
  }
};
