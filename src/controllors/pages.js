const { config } = require('../config/config');
const { read } = require('../api');

/**
 * FORM SCREEN
 */
exports.form = (req, res) => {
  try {
    read(`cartographes`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      read(`fonctionnaires`).then((data2) => {
        if (data2.error) {
          req.flash('Error', `${data2.error}`);
        }
        read(`paiements`).then((data3) => {
          if (data3.error) {
            req.flash('Error', `${data3.error}`);
          }
          res.render('pages/form', { data: [...data, ...data2], data3 });
        });
      });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/');
  }
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
  try {
    read(`users`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'addUser';

      const api = config.server.api;
      res.render('pages/admin', { path, data, api });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-fonction');
  }
};

/**
 * ADD CARTOGRAPHES SCREEN
 */
exports.addCartographe = async (req, res) => {
  try {
    const path = 'addCartographe';
    const api = config.server.api;
    res.render('pages/admin', { path });
  } catch (err) {
    res.redirect('/admin/add-cartographes');
  }
};

/**
 * EDIT CARTOGRAPHES SCREEN
 */
exports.editCartographe = async (req, res) => {
  try {
    read(`cartographe/${req.params.id}`).then((edit) => {
      if (edit.error) {
        req.flash('Error', `${edit.error}`);
      }
      const path = 'listCartographe';
      const api = config.server.api;
      res.render('pages/admin', { path, edit });
    });
  } catch (err) {
    req.flash('Error', `${err}`);
    res.redirect('/admin/add-cartographes');
  }
};

/**
 * ADD FONCTION SCREEN
 */
exports.addFonction = (req, res) => {
  try {
    read(`fonctions`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'addFonction';
      const api = config.server.api;
      res.render('pages/admin', { path, data, api });
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
    read(`fonctionnaires`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      read(`fonctions`).then((data2) => {
        if (data2.error) {
          req.flash('Error', `${data2.error}`);
        }
        const path = 'addFonctionnaire';
        const api = config.server.api;
        res.render('pages/admin', { path, data, data2, api });
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
    read(`cartographes`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'listCartographe';
      const api = config.server.api;
      res.render('pages/admin', { path, data, api });
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
  read(`fonctionnaires`).then((data) => {
    if (data.error) {
      req.flash('Error', `${data.error}`);
    }
    const path = 'addInstruction';
    const api = config.server.api;
    res.render('pages/admin', { path, data, api });
  });
};

/**
 * LIST INSTRUCTIONS SCREEN
 */
exports.listInstructions = (req, res) => {
  try {
    read(`instructions`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'listInstruction';
      const api = config.server.api;
      res.render('pages/admin', { path, data, api });
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
    read(`paiements`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'paiements';
      const api = config.server.api;
      res.render('pages/admin', { path, data, api });
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
    read(`forms`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const path = 'paiementPerdiems';
      const api = config.server.api;
      res.render('pages/admin', { path, data, api });
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
    read(`forms`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      const api = config.server.api;
      const path = 'paiementSalaires';
      res.render('pages/admin', { path, data, api });
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
    read(`paiement-autres`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      read(`paiements`).then((data2) => {
        if (data2.error) {
          req.flash('Error', `${data2.error}`);
        }
        read(`fonctionnaires`).then((data3) => {
          if (data3.error) {
            req.flash('Error', `${data3.error}`);
          }

          const api = config.server.api;
          const path = 'listPaiementAutres';

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
          res.render('pages/admin', {
            path,
            provinces,
            data,
            api,
            data2: [...data2, ...data3],
          });
        });
      });
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
    read(`paiements`).then((data) => {
      if (data.error) {
        req.flash('Error', `${data.error}`);
      }
      read(`fonctionnaires`).then((data2) => {
        if (data2.error) {
          req.flash('Error', `${data2.error}`);
        }
        const path = 'paiementAutres';
        const api = config.server.api;
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
        res.render('pages/admin', { path, provinces, data, api, data2 });
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
