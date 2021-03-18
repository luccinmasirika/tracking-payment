/**
 * FORM SCREEN
 */
exports.form = (req, res) => {
  res.render('pages/form');
};

/**
 * LOGIN SCREEN
 */
exports.login = (req, res) => {
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
exports.addCartographe = (req, res) => {
  const path = 'addCartographe';
  res.render('pages/admin', { path });
};

/**
 * ADD FONCTION SCREEN
 */
exports.addFonction = (req, res) => {
  const path = 'addFonction';
  res.render('pages/admin', { path });
};

/**
 * ADD FONCTIONNAIRE SCREEN
 */
exports.addFonctionnaire = (req, res) => {
  const path = 'addFonctionnaire';
  res.render('pages/admin', { path });
};

/**
 * LIST CARTOGRAPHES SCREEN
 */
exports.listCartographe = (req, res) => {
  const path = 'listCartographe';
  res.render('pages/admin', { path });
};

/**
 * ADD INSTRUCTIONS SCREEN
 */
exports.addInstructions = (req, res) => {
  const path = 'addInstruction';
  res.render('pages/admin', { path });
};

/**
 * LIST INSTRUCTIONS SCREEN
 */
exports.listInstructions = (req, res) => {
  const path = 'listInstruction';
  res.render('pages/admin', { path });
};

/**
 * PAIEMENT SCREEN
 */
exports.paiements = (req, res) => {
  const path = 'paiements';
  res.render('pages/admin', { path });
};

/**
 * PAIEMENT PERDIEMS SCREEN
 */
exports.paiementPerdiems = (req, res) => {
  const path = 'paiementPerdiems';
  res.render('pages/admin', { path });
};

/**
 * PAIEMENT SALAIRES SCREEN
 */
exports.paiementSalaires = (req, res) => {
  const path = 'paiementSalaires';
  res.render('pages/admin', { path });
};

/**
 * LIST AUTRES PAIEMENT SCREEN
 */
exports.listAutres = (req, res) => {
  const path = 'listPaiementAutres';
  res.render('pages/admin', { path });
};

/**
 * ADD AUTRES PAIEMENT SCREEN
 */
exports.autres = (req, res) => {
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
  res.render('pages/admin', { path, provinces });
};

/**
 * RAPPORTS SCREEN
 */
exports.rapports = (req, res) => {
  const path = 'rapports';
  res.render('pages/admin', { path });
};
