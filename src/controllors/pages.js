const { config } = require('../config/config');
const { read } = require('../api');

/**
 * FORM SCREEN
 */
exports.form = (req, res) => {
  res.render('pages/form');
};

/**
 * LOGIN SCREEN
 */
exports.loginPage = (req, res) => {
  res.render('pages/login');
};

/**
 * DASHBOARD SCREEN
 */
exports.admin = (req, res) => {
  const path = 'dashboard';
  res.render('pages/admin', { path });
};

/**
 * USERS SCREEN
 */
exports.addUser = (req, res) => {
  const path = 'addUser';
  res.render('pages/admin', { path });
};

/**
 * ADD CARTOGRAPHES SCREEN
 */
exports.addCartographe = async (req, res) => {
  try {
    const path = 'addCartographe';
    res.render('pages/admin', { path });
  } catch (err) {
    res.redirect('/admin/add-cartographes');
  }
};

/**
 * ADD FONCTION SCREEN
 */
exports.addFonction = (req, res) => {
  try {
    read(`fonctions/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'addFonction';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-fonction');
  }
};

/**
 * ADD FONCTIONNAIRE SCREEN
 */
exports.addFonctionnaire = (req, res) => {
  try {
    read(`fonctionnaires/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      read(`fonctions/60578cae99564a53e3bf0dc0`).then((data2) => {
        if (data2.error) {
          req.flash('Error', `${data2.error}`);
        }
        const path = 'addFonctionnaire';
        res.render('pages/admin', { path, data, data2 });
      });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-fonctionnaire');
  }
};

/**
 * LIST CARTOGRAPHES SCREEN
 */
exports.listCartographe = (req, res) => {
  try {
    read(`cartographes/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'listCartographe';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-cartographes');
  }
};

/**
 * ADD INSTRUCTIONS SCREEN
 */
exports.addInstructions = (req, res) => {
  read(`fonctionnaires/60578cae99564a53e3bf0dc0`).then((data) => {
    if (data.error) {
      req.flash('Error', `${data.error}`);
    }
    const path = 'addInstruction';
    res.render('pages/admin', { path, data });
  });
};

/**
 * LIST INSTRUCTIONS SCREEN
 */
exports.listInstructions = (req, res) => {
  try {
    read(`instructions/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'listInstruction';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-instructions');
  }
};

/**
 * PAIEMENT SCREEN
 */
exports.paiements = (req, res) => {
  try {
    read(`paiements/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'paiements';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/paiements');
  }
};

/**
 * PAIEMENT PERDIEMS SCREEN
 */
exports.paiementPerdiems = (req, res) => {
  try {
    read(`forms/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      console.log('data', data);
      const path = 'paiementPerdiems';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/paiement-perdiems');
  }
};

/**
 * PAIEMENT SALAIRES SCREEN
 */
exports.paiementSalaires = (req, res) => {
  try {
    read(`form/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      console.log('data', data);
      const path = 'paiementSalaires';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/paiement-salaires');
  }
};

/**
 * LIST AUTRES PAIEMENT SCREEN
 */
exports.listAutres = (req, res) => {
  try {
    read(`paiement-autres/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      console.log('data', data);
      const path = 'listPaiementAutres';
      res.render('pages/admin', { path, data });
    });
  } catch (err) {
    console.log(err);
    req.flash('Error', `${err}`);
    res.redirect('/admin/paiement-autres');
  }
};

/**
 * ADD AUTRES PAIEMENT SCREEN
 */
exports.autres = (req, res) => {
  try {
    read(`paiements/60578cae99564a53e3bf0dc0`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      read(`fonctionnaires/60578cae99564a53e3bf0dc0`).then((data2) => {
        if (data2.error) {
          req.flash('Error', `${data2.error}`);
        }
        const path = 'paiementAutres';
        const provinces = [
          'Bas-Uele',
          'Équateur',
          'Haut-Katanga',
          'Haut-Lomami',
          'Haut-Uele',
          'Ituri',
          'Kasaï',
          'Kasaï central',
          'Kasaï oriental',
          'Kinshasa',
          'Kongo-central',
          'Kwango',
          'Kwilu',
          'Lomami',
          'Lualaba',
          'Mai-Ndombe',
          'Maniema',
          'Mongala',
          'Nord-Kivu',
          'Nord-Ubangi',
          'Sankuru',
          'Sud-Kivu',
          'Sud-Ubangi',
          'Tanganyika',
          'Tshopo',
          'Tshuapa',
        ];
        res.render('pages/admin', { path, provinces, data, data2 });
      });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/paiements');
  }
};

/**
 * RAPPORTS SCREEN
 */
exports.rapports = (req, res) => {
  const path = 'rapports';
  res.render('pages/admin', { path });
};
